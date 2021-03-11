const loginPageStyles = theme => ({
	welcome: {
		fontSize: 26,
		paddingBottom: 20,
		color: "#000000",
		fontWeight: 500,
	},
	buttonHeader: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "space-between",
		flexDirection: "column",
		bgcolor: "background.paper",
		minHeight: "100vh",
		paddingTop: 23,
	},
	accBtn: {
		width: 170,
		height: 54,
		borderRadius: 5,
		filter: "drop-shadow(0px 2px 6px rgba(74,106,149,0.2))",
		backgroundColor: "#ffffff",
		color: "#3a8dff",
		boxShadow: "none",
		marginRight: 35,
		textTransform: "none",
		fontSize: 14,

		[theme.breakpoints.down("sm")]: {
			marginRight: 5,
			width: 140,
		},
	},
	noAccBtn: {
		fontSize: 14,
		color: "#b0b0b0",
		fontWeight: 400,
		textAlign: "center",
		marginRight: 21,
		whiteSpace: "nowrap",
		textTransform: "none",
	},
	box: {
		padding: 24,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		flexDirection: "column",
		maxWidth: 900,
		margin: "auto",
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	label: { fontSize: 19, color: "rgb(0,0,0,0.4)", paddingLeft: "5px" },
	submit: {
		margin: theme.spacing(3, 2, 2),
		padding: 10,
		width: 160,
		height: 56,
		borderRadius: 3,
		marginTop: 49,
		fontSize: 16,
		fontWeight: "bold",
		backgroundColor: "#3a8dff",
	},
	inputs: {
		marginTop: ".8rem",
		height: "2rem",
		padding: "5px",
	},
	link: { textDecoration: "none", display: "flex", flexWrap: "nowrap" },
	forgot: {
		paddingRight: 10,
		color: theme.palette.primary.main,
	},
})

export default loginPageStyles
