const { Op } = require("sequelize")
const { Conversation } = require("../database/models")

const saveConversation = async newConversationData => {
	return await Conversation.create(newConversationData)
}

const findConversation = async ({ senderId, receiverId }) => {
	const usersArray = [senderId, receiverId]

	return await Conversation.findOne({
		where: {
			[Op.and]: [{
				firstUserId: {
					[Op.or]: usersArray
				}
			}, {
				secondUserId: {
					[Op.or]: usersArray
				}
			}]
		}
	})
}

const findAllUserConversations = async (userId, include = []) => {
	return Conversation.findAll({
		where: {
			[Op.or]: [{ firstUserId: userId }, { secondUserId: userId }]
		},
		include
	})
}

module.exports = { saveConversation, findConversation, findAllUserConversations }
