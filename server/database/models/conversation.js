'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
	class Conversation extends Model {
	/**
	 * Helper method for defining associations.
	 * This method is not a part of Sequelize lifecycle.
	 * The `models/index` file will call this method automatically.
	*/
		static associate(models) {
			// define association here
			this.belongsTo(models.User, {
				foreignKey: "firstUserId",
				as: "firstUser",
			})

			this.belongsTo(models.User, {
				foreignKey: "secondUserId",
				as: "secondUser",
			})
		}
	}

	Conversation.init({
		firstUserId: DataTypes.INTEGER,
		secondUserId: DataTypes.INTEGER
	},
	{
		sequelize,
		modelName: 'Conversation',
	})

	return Conversation
}