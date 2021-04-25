const messagesDisplay = theme => ({
	root: {
		height: "90%",
		overflowY: "auto",
		padding: "2rem 1rem",
		[theme.breakpoints.only("xs")]: {
			padding: 0,
			height: "100%",
		},
	},
	senderRow: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-end",
		padding: "0.5rem, 0",
	},
	receiverRow: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-start",
		padding: "0.5rem, 0",
	},
})

export default messagesDisplay
