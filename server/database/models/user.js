"use strict"

const { Model } = require("sequelize")
const { hashPassword } = require("../../utils/encrypt")

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}

	User.init(
		{
			name: { type: DataTypes.STRING, allowNull: false },
			email: { type: DataTypes.STRING, allowNull: false, unique: true },
			password: { type: DataTypes.STRING, allowNull: false },
		},
		{
			sequelize,
			modelName: "User",
			defaultScope: {
				// removes password from the user object
				attributes: { exclude: ["password"] },
			},
			scopes: {
				withPassword: {
					attributes: {},
				},
			},
		}
	)

	// Hash password before creating a new user
	User.beforeCreate((user, options) => {
		const hashedPassword = hashPassword(user.password)
		user.password = hashedPassword
	})
	return User
}
