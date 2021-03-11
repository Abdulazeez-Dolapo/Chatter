const { User } = require("../database/models")

const findUser = async (where, scope = "defaultScope") => {
	try {
		return await User.scope(scope).findOne({
			where,
		})
	} catch (err) {
		return err
	}
}

const createUser = async newUserData => {
	try {
		return await User.create(newUserData)
	} catch (err) {
		return err
	}
}

module.exports = { findUser, createUser }
