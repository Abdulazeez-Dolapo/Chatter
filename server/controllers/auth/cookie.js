const { cookieOptions } = require('../../utils/constants')
const createError = require("http-errors")

const readCookie = async (req, res, next) => {
	try {
		return res.status(200).json({
			confirmed: true,
			user: { username: req.user.username, id: req.user.id , imageUrl: req.user.imageUrl },
		})
	} catch (error) {
		return next(createError(500))
	}
}

const logout = async (req, res, next) => {
	try {
		const { token } = req.cookies

		res.cookie("token", token, { ...cookieOptions, maxAge: 1 })
		return res.status(200).json({
			message: "Logged out successfully",
		})
	} catch (error) {
		console.log(error)
		return next(createError(500))
	}
}

module.exports = { readCookie, logout }
