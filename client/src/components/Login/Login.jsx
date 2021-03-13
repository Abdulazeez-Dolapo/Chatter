import Auth from "../UtilityComponents/Auth"
import { loginUser } from "../../services/auth"

export default function Login() {
	const initialValues = {
		email: "",
		password: "",
	}

	return (
		<Auth
			type="login"
			onFormSubmit={loginUser}
			initialValues={initialValues}
			routeTo="/signup"
		/>
	)
}
