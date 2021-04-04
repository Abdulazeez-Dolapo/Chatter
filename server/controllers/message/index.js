const createError = require("http-errors")

const { saveMessage, findAllMessages } = require("../../queries/message")

const validateRequestBody = body => {
	const { conversationId, content } = body

	return !!content && !!conversationId
}

const saveNewMessage = async (req, res, next) => {
	try {
		const errorMessage = "Please enter content and/or conversationId"

		// validate request body
		const isRequestBodyValid = validateRequestBody(req.body)
		if (!isRequestBodyValid) {
			return next(createError(400, errorMessage))
		}

		let { content, conversationId } = req.body

		const messageBody = {
			conversationId,
			content,
			senderId: req.user.id,
		}

		const newMessage = await saveMessage(messageBody)

		return res.status(201).json({
			message: "message created successfully",
			newMessage,
		})
	} catch (error) {
		console.log(error)
		return next(createError(500))
	}
}

const fetchAllMessagesInConversation = async (req, res, next) => {
	try {
		const conversationId = parseInt(req.params.conversationId)
		const messages = await findAllMessages(conversationId, ["sender"])

		return res.status(200).json({
			messages,
		})
	} catch (error) {
		return next(createError(500))
	}
}

module.exports = { saveNewMessage, fetchAllMessagesInConversation }
