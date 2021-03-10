const createError = require("http-errors")

const { validateEmail, validatePassword } = require("../../utils/validation")
const { comparePassword } = require("../../utils/encrypt")
const { createToken } = require("../../utils/token")
const { ONE_DAY_IN_MILLISECONDS } = require("../../utils/constants")

const UserQueries = require("../../queries/user")

const validateRequestBody = body => {
	const { email, password } = body
	const errors = [...validateEmail(email), ...validatePassword(password)]

	return errors.length === 0
}

const loginUser = async (req, res, next) => {
	try {
		const errors = ["Invalid login credentials"]

		// validate request body
		const isRequestBodyValid = validateRequestBody(req.body)
		if (!isRequestBodyValid) {
			return next(createError(400, { errors }))
		}

		const { password, email } = req.body

		// find the user
		const user = await UserQueries.findUser({ email }, "withPassword")
		if (!user) {
			return next(createError(400, { errors }))
		}

		// Check if password sent matches password in the DB
		const isPasswordCorrect = comparePassword(password, user.password)
		if (!isPasswordCorrect) {
			return next(createError(400, { errors }))
		}

		// remove password from user object before encryption
		delete user.dataValues.password
		const token = createToken(user.dataValues)

		// set cookie
		const cookieOptions = {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			expire: ONE_DAY_IN_MILLISECONDS,
		}
		res.cookie("token", token, cookieOptions)

		return res.status(200).json({
			message: "Logged in successfully",
			token,
		})
	} catch (error) {
		return next(createError(500, { errors: ["An error occured"] }))
	}
}

module.exports = { loginUser }
