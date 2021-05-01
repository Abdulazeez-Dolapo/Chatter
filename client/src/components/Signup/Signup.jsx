import Auth from "../UtilityComponents/Auth"
import { signupUser } from "../../services/auth"
import { uploadImage } from "../../services/upload"

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
			uploadImage={uploadImage}
			initialValues={initialValues}
			routeTo="/login"
		/>
	)
}

export default Signup
