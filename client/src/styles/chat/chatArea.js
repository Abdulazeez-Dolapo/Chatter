const chatArea = theme => ({
	root: {
		height: "100%",
	},
	userInfo: {
		height: "9vh",
		width: "96%",
		[theme.breakpoints.only("xs")]: {
			width: "92%",
		},
	},
	messageDisplay: {
		height: "66vh",
		[theme.breakpoints.only("xs")]: {
			height: "64vh",
		},
	},
	textInput: {
		paddingLeft: "1rem",
		[theme.breakpoints.only("xs")]: {
			padding: 0,
		},
	},
})

export default chatArea
