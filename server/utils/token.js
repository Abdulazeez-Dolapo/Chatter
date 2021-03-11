const jwt = require("jsonwebtoken")
const { ONE_DAY_IN_SECONDS } = require("./constants")

const createToken = (
	payload,
	secretKey = process.env.JWT_SECRET_KEY,
	expiresIn = ONE_DAY_IN_SECONDS
) => {
	const token = jwt.sign(payload, secretKey, { expiresIn })
	return token
}

const verifyToken = (token, secretKey = process.env.JWT_SECRET_KEY) => {
	const decoded = jwt.verify(token, secretKey)
	return decoded
}

module.exports = {
	createToken,
	verifyToken,
}
