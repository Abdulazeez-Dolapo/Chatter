const { Message } = require("../database/models")

const saveMessage = async newMessageData => {
	return await Message.create(newMessageData)
}

const findAllMessages = async (
	conversationId,
	include = [],
	order = [["createdAt", "ASC"]],
	limit = 100
) => {
	return await Message.findAll({ where: { conversationId }, include, order, limit })
}

module.exports = { saveMessage, findAllMessages }
