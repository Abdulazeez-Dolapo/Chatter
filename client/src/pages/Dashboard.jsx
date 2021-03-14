import { useContext } from "react"

import AuthContext from "../context/AuthContext"

const Dashboard = () => {
	const { user } = useContext(AuthContext)

	return (
		<>
			{/* For testing purposes right now, ignore styling */}
			<p>Dashboard</p>

			<p>{user.username}</p>
		</>
	)
}

export default Dashboard
