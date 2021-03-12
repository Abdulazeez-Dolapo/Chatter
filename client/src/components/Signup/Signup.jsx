import Auth from "../UtilityComponents/Auth"
import { signupUser } from "../../services/signup"

const Signup = () => {
	const initialValues = {
		username: "",
		email: "",
		password: "",
	}

	return (
		<Auth
			type="signup"
			onFormSubmit={signupUser}
			initialValues={initialValues}
			routeTo="/login"
		/>
	)
}

export default Signup
