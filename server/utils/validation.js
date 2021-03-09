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

const validateName = name => {
	const errors = []

	if (!name) {
		errors.push("Please enter a name")
	}

	if (name && name.length < 3) {
		errors.push("name must not be less than 6 characters")
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
	validateName,
	validateEmail,
}
