export default function Dashboard() {
	return (
		<>
			{/* For testing purposes right now, ignore styling */}
			<p>Dashboard</p>

			<p>User: {JSON.parse(localStorage.getItem("user")).username}</p>
		</>
	)
}
