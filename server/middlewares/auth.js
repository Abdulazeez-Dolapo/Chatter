const createError = require("http-errors")

const { verifyToken } = require("../utils/token")
const { findUser } = require("../queries/user")

const authenticate = async (req, res, next) => {
	try {
		const { token } = req.cookies

		if (!token) {
			return next(createError(401))
		}

		// decode jwt token gotten from cookies
		const decoded = verifyToken(token)

		// if token is invalid or has expired
		if (!decoded) {
			return next(createError(401))
		}

		// find user
		const user = await findUser({ id: decoded.id })

		// if user could not be found
		if (!user) {
			return next(createError(404))
		}

		req.user = user

		return next()
	} catch (error) {
		console.log(error)
		return next(createError(500))
	}
}

module.exports = {
	authenticate,
}
