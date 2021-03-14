const createError = require("http-errors")

const {
	validateEmail,
	validateUsername,
	validatePassword,
} = require("../../utils/validation")

const { createUser, findUser } = require("../../queries/user")
const { createToken } = require("../../utils/token")
const { cookieOptions } = require("../../utils/constants")

const validateRequestBody = body => {
	const { email, username, password } = body
	const errors = [
		...validateEmail(email),
		...validateUsername(username),
		...validatePassword(password),
	]

	return errors
}

const registerUser = async (req, res, next) => {
	try {
		// validate request body
		const errors = validateRequestBody(req.body)
		if (errors.length > 0) {
			return next(createError(400, { errors }))
		}

		const { email } = req.body

		// check if email already exists
		const user = await findUser({ email })
		if (user) {
			return next(createError(400, { errors: ["email already in use"] }))
		}

		// create a new user
		const newUser = await createUser(req.body)
		const token = createToken({ id: newUser.id })

		// set cookie
		res.cookie("token", token, cookieOptions)

		return res.status(201).json({
			message: "User created and logged in successfully",
			user: {
				username: newUser.username,
				id: newUser.id,
			},
		})
	} catch (error) {
		console.log(error)
		return next(createError(500))
	}
}

module.exports = { registerUser }
