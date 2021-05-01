const createError = require("http-errors")

const { validateEmail, validatePassword } = require("../../utils/validation")
const { comparePassword } = require("../../utils/encrypt")
const { createToken } = require("../../utils/token")
const { cookieOptions } = require("../../utils/constants")
const { findUser } = require("../../queries/user")

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
		const user = await findUser({ email }, "withPassword")
		if (!user) {
			return next(createError(400, { errors }))
		}

		// Check if password sent matches password in the DB
		const isPasswordCorrect = comparePassword(password, user.password)
		if (!isPasswordCorrect) {
			return next(createError(400, { errors }))
		}

		const token = createToken({ id: user.id, username: user.username })

		// set cookie
		res.cookie("token", token, cookieOptions)

		return res.status(200).json({
			message: "Logged in successfully",
			user: {
				username: user.username,
				id: user.id,
				imageUrl: user.imageUrl,
			},
		})
	} catch (error) {
		console.log(error)
		return next(createError(500))
	}
}

module.exports = { loginUser }
