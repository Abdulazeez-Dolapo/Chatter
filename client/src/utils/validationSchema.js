import * as Yup from "yup"

const getValidationSchema = type => {
	const schema = {
		username: Yup.string()
			.required("Username is required")
			.min(3, "Username too short")
			.max(40, "Username is too long"),
		email: Yup.string()
			.required("Email is required")
			.email("Email is not valid"),
		password: Yup.string()
			.required("Password is required")
			.max(100, "Password is too long")
			.min(6, "Password too short"),
	}

	if (type === "login") delete schema.username

	return Yup.object().shape(schema)
}

export default getValidationSchema
