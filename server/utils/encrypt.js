const bcrypt = require("bcryptjs")

const hashPassword = password => {
	const salt = bcrypt.genSaltSync(10)
	return bcrypt.hashSync(password, salt)
}

const comparePassword = (password, comparePassword) => {
	return bcrypt.compareSync(password, comparePassword)
}

module.exports = {
	hashPassword,
	comparePassword,
}
