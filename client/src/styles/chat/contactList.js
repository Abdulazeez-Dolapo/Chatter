const contactList = theme => ({
	root: {
		width: "100%",
		height: "79vh",
	},
	input: {
		borderRadius: "5px",
		display: "flex",
		alignItems: "center",
		backgroundColor: theme.palette.secondary.bgColor,
		"& ::placeholder": {
			fontWeight: "bold",
		},
	},
	chatHeader: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	loader: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	contactList: {
		padding: "1rem",
		paddingLeft: 0,
		"&:hover": {
			cursor: "pointer",
		},
	},
	noBorder: {
		border: "none",
	},
	heading: {
		fontSize: "1.7rem",
	},
	usersList: {
		height: "86%",
		overflowY: "auto",
	},
})

export default contactList
