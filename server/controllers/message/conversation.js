const createError = require("http-errors")
const { Conversation } = require("../../database/models")

const { saveConversation } = require("../../queries/conversation")
const {
	saveParticipants,
	findAllUserConversations,
	findAllUsersInConversation,
} = require("../../queries/participant")

const validateRequestBody = ({ participants }) => {
	return participants && participants.length > 0
}

const addParticipantsToConversation = async (participants, conversationId) => {
	const allParticipants = participants.map(participant => ({
		userId: participant,
		conversationId,
	}))

	return await saveParticipants(allParticipants)
}

const createConversation = async (req, res, next) => {
	try {
		const errorMessage = "Please enter participants"

		// validate request body
		const isRequestBodyValid = validateRequestBody(req.body)
		if (!isRequestBodyValid) {
			return next(createError(400, errorMessage))
		}

		const conversation = await saveConversation({ lastMessageId: null })
		await addParticipantsToConversation(req.body.participants, conversation.id)

		return res.status(201).json({
			conversation,
		})
	} catch (error) {
		return next(createError(500))
	}
}

const fetchUserConversations = async (req, res, next) => {
	try {
		const userId = req.user.id
		const include = [
			{
				model: Conversation,
				as: "conversation",
				include: ["lastMessage"],
			},
			"user",
		]

		const conversations = await findAllUserConversations(userId)

		if (conversations && conversations.length === 0) {
			return next(createError(404, "No conversations found"))
		}

		const conversationIds = conversations.map(
			conversation => conversation.conversationId
		)

		// Fetch all other members of the user's conversations
		const otherUsersInConversations = await findAllUsersInConversation(
			conversationIds,
			include,
			userId
		)

		return res.status(200).json({
			conversations: otherUsersInConversations,
		})
	} catch (error) {
		return next(createError(500))
	}
}

const fetchUsersInConversation = async (req, res, next) => {
	try {
		const conversationId = req.params.conversationId

		const users = await findAllUsersInConversation(conversationId)

		if (users.length === 0) {
			return next(createError(404, "No users found"))
		}

		return res.status(200).json({
			users,
		})
	} catch (error) {
		return next(createError(500))
	}
}

module.exports = {
	fetchUserConversations,
	createConversation,
	fetchUsersInConversation,
}
