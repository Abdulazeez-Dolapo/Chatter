import { useState, useEffect, createContext } from "react"
import { checkCookie } from "../services/auth"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [loading, setLoading] = useState(true)
	const [user, setUser] = useState({})

	useEffect(() => {
		setLoading(true)

		checkCookie()
			.then(res => {
				setIsLoggedIn(res.confirmed)
				setUser(res.user)
				setLoading(false)
			})
			.catch(() => {
				setIsLoggedIn(false)
				setLoading(false)
			})
	}, [])

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				user,
				setUser,
				loading,
				setLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
