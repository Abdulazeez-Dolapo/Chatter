const createError = require("http-errors")

const { saveMessage } = require("../../queries/message")
const { saveConversation, findConversation } = require("../../queries/conversation")

const validateRequestBody = body => {
	const { receiverId, content } = body

	return !!receiverId && !!content
}

const saveNewMessage = async (req, res, next) => {
	try {
		const errors = ["Please enter receiverId and/or content"]

		// validate request body
		const isRequestBodyValid = validateRequestBody(req.body)
		if (!isRequestBodyValid) {
			return next(createError(400, { errors }))
		}

		const { receiverId, content } = req.body
		const senderId = req.user.id
		const conversationBody = { senderId, receiverId }

		let conversation
		// Check if a conversation already exist for both users
		conversation = await findConversation(conversationBody)

		// If none exists, create a new conversation
		if(!conversation) {
			conversation = await saveConversation({ firstUserId: senderId, secondUserId: receiverId })
		}

		const messageBody = {
			conversationId: conversation.id,
			content,
		}

		const newMessage = await saveMessage(messageBody)

		return res.status(201).json({
			message: "message created successfully",
			newMessage,
		})
	} catch (error) {
		console.log(error)
		return next(createError(500, { errors: ["An error occured"] }))
	}
}

module.exports = { saveNewMessage }
