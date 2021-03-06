"use strict"
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Messages", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			conversationId: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			content: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			senderId: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})

		await queryInterface.addIndex("Messages", ["createdAt"])
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Messages")
	},
}
