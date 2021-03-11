const createError = require("http-errors")

const {
	validateEmail,
	validateName,
	validatePassword,
} = require("../../utils/validation")

const UserQueries = require("../../queries/user")

const validateRequestBody = body => {
	const { email, name, password } = body
	const errors = [
		...validateEmail(email),
		...validateName(name),
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
		const user = await UserQueries.findUser({ email })
		if (user) {
			return next(createError(400, { errors: ["email already in use"] }))
		}

		// create a new user
		await UserQueries.createUser(req.body)

		return res.status(201).json({
			message: "User created successfully",
		})
	} catch (error) {
		return next(createError(500, { errors: ["An error occured"] }))
	}
}

module.exports = { registerUser }
