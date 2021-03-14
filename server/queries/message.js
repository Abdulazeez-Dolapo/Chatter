const { Message } = require("../database/models")

const saveMessage = async newMessageData => {
	return await Message.create(newMessageData)
}

const findAllMessages = async (conversationId, include = [], order = [["createdAt", "DESC"]]) => {
	return await Message.findAll({ where: { conversationId }, include, order})
}

module.exports = { saveMessage, findAllMessages }
