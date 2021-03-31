const contactList = theme => ({
	root: {
		width: "100%",
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
	contactList: {
		padding: "1rem",
	},
	noBorder: {
		border: "none",
	},
	heading: {
		fontSize: "1.7rem",
	},
	usersList: {
		height: "74vh",
		overflowY: "auto",
	},
})

export default contactList
