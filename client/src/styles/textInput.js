const textInput = theme => ({
	input: {
		borderRadius: "5px",
		display: "flex",
		alignItems: "center",
		backgroundColor: theme.palette.secondary.bgColor,
		"& ::placeholder": {
			fontWeight: "bold",
		},
	},
	noBorder: {
		border: "none",
	},
})

export default textInput
