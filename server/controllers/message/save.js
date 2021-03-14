const createError = require("http-errors")

const { saveMessage } = require("../../queries/message")

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

		const messageBody = {
			receiverId,
			content,
			senderId,
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
