const message = theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		maxWidth: "60%",
		paddingBottom: "1rem",
	},
	time: {
		color: theme.palette.secondary.main,
	},
	timeContainer: {
		width: "100%",
	},
	senderMessageContainer: {
		maxWidth: "100%",
		backgroundColor: theme.palette.secondary.bgColor,
		color: theme.palette.secondary.main,
		minHeight: "1rem",
		display: "flex",
		alignItems: "center",
		borderRadius: "10px 10px 0 10px",
		padding: "1rem",
		wordBreak: "break-all",
	},
	receiverMessageContainer: {
		maxWidth: "100%",
		backgroundColor: theme.palette.primary.main,
		color: "white",
		minHeight: "1rem",
		display: "flex",
		alignItems: "center",
		borderRadius: "0 10px 10px 10px",
		padding: "1rem",
		wordBreak: "break-all",
	},
	text: { fontSize: "1.1rem" },
})

export default message
