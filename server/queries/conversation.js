const { Conversation } = require("../database/models")

const saveConversation = async newConversationData => {
	return await Conversation.create(newConversationData)
}

module.exports = { saveConversation }
