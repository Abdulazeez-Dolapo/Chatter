const noConversation = theme => ({
	root: {
		width: "100%",
		height: "100%",
		padding: "1rem",
		borderRadius: "20px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	message: {
		textAlign: "center",
		fontSize: "1rem",
	},
	linkContainer: {
		display: "flex",
		justifyContent: "center",
		paddingTop: "1rem",
	},
	imageContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: "100%",
	},
	textContainer: {
		width: "50%",
	},
	button: {
		textTransform: "capitalize",
		borderRadius: "10px",
		width: "7rem",
	},
})

export default noConversation
