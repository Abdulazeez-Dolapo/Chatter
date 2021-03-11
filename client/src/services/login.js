export const loginUser = async (email, password) => {
	console.log(email, password)
	const res = await fetch(
		`/auth/login?email=${email}&password=${password}`
	).then(res => res.json())
	localStorage.setItem("user", res.user)
	localStorage.setItem("token", res.token)
}
