'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
	class Message extends Model {
	/**
	 * Helper method for defining associations.
	 * This method is not a part of Sequelize lifecycle.
	 * The `models/index` file will call this method automatically.
	 */
		static associate(models) {
		// define association here
			this.belongsTo(models.Conversation, {
				foreignKey: "conversationId",
				as: "conversation",
			})

			this.belongsTo(models.User, {
				foreignKey: "senderId",
				as: "sender",
			})
		}
	}

	Message.init({
		conversationId: DataTypes.INTEGER,
		senderId: DataTypes.INTEGER,
		content: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'Message',
		indexes: [{ fields: ['createdAt'] }]
	})

	// Update the lastMessageId of the conversation the message belong to
	Message.afterCreate((message) => {
		const { id, conversationId } = message
		sequelize.models.Conversation.update({ lastMessageId: id }, { where: { id: conversationId }})
	})

	return Message
};