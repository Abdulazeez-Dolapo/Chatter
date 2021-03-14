const { User } = require("../database/models")
const { Op } = require('sequelize')

const findUser = async (where, scope = "defaultScope") => {
	return await User.scope(scope).findOne({
		where,
	})
}

const createUser = async newUserData => {
	return await User.create(newUserData)
}

const findAllUsers = async () => {
	return await User.findAll()
}

const searchUser = async username => {
	return await User.findAll({ where: { username: { [Op.substring]: username.toLowerCase() }}})
}

module.exports = { findUser, createUser, searchUser, findAllUsers }
