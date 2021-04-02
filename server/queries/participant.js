const { Participant } = require("../database/models")

const saveParticipants = async participants => {
	return await Participant.bulkCreate(participants)
}

const findAllUserConversations = async (userId, include = ["conversation"]) => {
	return await Participant.findAll({ where: { userId }, include })
}

const findAllUsersInConversation = async (
	conversationId,
	include = ["user"]
) => {
	return await Participant.findAll({ where: { conversationId }, include })
}

module.exports = {
	saveParticipants,
	findAllUserConversations,
	findAllUsersInConversation,
}
