const { Participant } = require("../database/models")
const { Op } = require("sequelize")

const saveParticipants = async participants => {
	return await Participant.bulkCreate(participants)
}

const findAllUserConversations = async (userId, include) => {
	return await Participant.findAll({ where: { userId }, include })
}

const findAllUsersInConversation = async (conversationIds, include, userId) => {
	const query = {
		where: { conversationId: { [Op.in]: conversationIds } },
		include,
	}

	// Remove the Id of the current user from the conversations array
	if (userId) {
		query.where = {
			[Op.and]: [
				{ conversationId: { [Op.in]: conversationIds } },
				{ userId: { [Op.not]: userId } },
			],
		}
	}

	return await Participant.findAll(query)
}

module.exports = {
	saveParticipants,
	findAllUserConversations,
	findAllUsersInConversation,
}
