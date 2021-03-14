const { Message } = require("../database/models")

const saveMessage = async newMessageData => {
	return await Message.create(newMessageData)
}

module.exports = { saveMessage }
