const chatPage = theme => ({
	root: {
		height: "100%",
		width: "100%",
		padding: "2rem",
		margin: 0,
		[theme.breakpoints.only("xs")]: {
			padding: "1rem",
		},
	},
	profile: {
		paddingBottom: "2rem",
		[theme.breakpoints.only("xs")]: {
			paddingBottom: "1rem",
		},
	},
	chatArea: {
		padding: "0 0.5rem",
	},
})

export default chatPage
