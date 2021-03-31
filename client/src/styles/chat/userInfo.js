const userInfo = theme => ({
	root: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		padding: "1rem",
		height: "4rem",
		borderRadius: "5px",
		boxShadow: `14px 6px 22px ${theme.palette.secondary.main}`,
	},
	name: {
		textTransform: "lowercase",
		fontSize: "1.3rem",
		marginRight: "1.1rem",
	},
	online: { fontSize: "1rem", color: theme.palette.secondary.main },
	circle: {
		backgroundColor: theme.palette.primary.main,
		borderRadius: "100%",
		width: 10,
		height: 10,
		marginRight: 10,
	},
})

export default userInfo
