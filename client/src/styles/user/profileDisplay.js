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
		width: "80%",
	},
	name: {
		textTransform: "lowercase",
		fontSize: "1rem",
	},
	message: {
		color: theme.palette.secondary.main,
		fontSize: "0.8rem",
	},
	badgeContainer: {
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
	},
})

export default profileDisplay
