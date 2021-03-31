const profileDisplay = theme => ({
	root: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	image: {
		height: 50,
		width: 50,
		borderRadius: "100%",
	},
	textContainer: {
		marginLeft: "1.5rem",
	},
	name: {
		textTransform: "lowercase",
		fontSize: "1rem",
	},
	message: {
		color: theme.palette.secondary.main,
		fontSize: "0.8rem",
	},
})

export default profileDisplay
