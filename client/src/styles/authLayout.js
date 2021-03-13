const authLayoutStyles = theme => ({
	root: {
		minHeight: "100vh",
		"& .MuiInput-underline:before": {
			borderBottom: "1.2px solid rgba(0, 0, 0, 0.2)",
		},
	},
	overlay: {
		backgroundImage:
			"linear-gradient(180deg, rgb(58,141,255, 0.75) 0%, rgb(134,185,255, 0.75) 100%)",
		backgroundSize: "cover",
		backgroundPosition: "center",
		flexDirection: "column",
		minHeight: "100vh",
		paddingBottom: 145,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		backgroundImage: "url('/Images/bg-img.png')",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
	heroText: {
		fontSize: 26,
		textAlign: "center",
		color: "white",
		marginTop: 30,
		maxWidth: 300,
		fontWeight: 400,
	},
})

export default authLayoutStyles
