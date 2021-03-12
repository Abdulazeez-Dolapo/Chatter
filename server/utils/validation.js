const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

const validatePassword = password => {
	const errors = []

	if (!password) {
		errors.push("Please enter a password")
	}

	if (password && password.length < 6) {
		errors.push("password must not be less than 6 characters")
	}

	return errors
}

const validateUsername = username => {
	const errors = []

	if (!username) {
		errors.push("Please enter a username")
	}

	if (username && username.length < 3) {
		errors.push("username must not be less than 3 characters")
	}

	return errors
}

const validateEmail = email => {
	const errors = []

	if (!email) {
		errors.push("Please enter an email")
	}

	if (email && !EMAIL_REGEX.test(email)) {
		errors.push("Please enter a valid email")
	}

	return errors
}

module.exports = {
	validatePassword,
	validateUsername,
	validateEmail,
}
