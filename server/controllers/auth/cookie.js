const readCookie = async (req, res, next) => {
	try {
		return res.status(200).json({
			confirmed: true,
			user: { username: req.user.username, id: req.user.id },
		})
	} catch (error) {
		return next(createError(500, { errors: ["An error occured"] }))
	}
}

module.exports = { readCookie }
