'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
	class Participant extends Model {
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
				foreignKey: "userId",
				as: "user",
			})
		}
	}

	Participant.init({
		conversationId: DataTypes.INTEGER,
		userId: DataTypes.INTEGER,
	},
	{
		sequelize,
		modelName: 'Participant',
	})

	return Participant
};