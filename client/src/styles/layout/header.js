const headerStyles = theme => ({
	root: {
		width: "100%",
	},
	navLinkContainer: {
		display: "flex",
		justifyContent: "flex-end",
		paddingRight: "2rem",
	},
	title: {
		paddingLeft: "1rem",
		"&:hover": {
			cursor: "pointer",
		},
	},
	button: {
		color: "white",
	},
})

export default headerStyles
