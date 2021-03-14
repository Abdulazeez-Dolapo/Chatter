const { User } = require("../database/models")

const findUser = async (where, scope = "defaultScope") => {
	return await User.scope(scope).findOne({
		where,
	})
}

const createUser = async newUserData => {
	return await User.create(newUserData)
}

module.exports = { findUser, createUser }
