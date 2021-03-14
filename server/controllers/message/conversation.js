const createError = require("http-errors")

const { findAllUserConversations } = require("../../queries/conversation")

const fetchUserConversations = async (req, res, next) => {
	try {
		const userId = req.user.id
      const include = ["firstUser", "secondUser"]
		const conversations = await findAllUserConversations(userId, include)

		return res.status(200).json({
			conversations,
		})
	} catch (error) {
		return next(createError(500))
	}
}

module.exports = { fetchUserConversations }
