const loginPageStyles = theme => ({
	welcome: {
		fontSize: 26,
		paddingBottom: 20,
		fontWeight: 500,
	},
	buttonHeader: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "space-between",
		flexDirection: "column",
		bgcolor: "background.paper",
		minHeight: "80vh",
		paddingTop: 23,
	},
	accBtn: {
		width: 170,
		height: 54,
		borderRadius: 5,
		filter: `drop-shadow(0px 2px 6px ${theme.palette.primary.shadow})`,
		backgroundColor: theme.palette.primary.btnBackground,
		color: theme.palette.primary.main,
		boxShadow: "none",
		marginRight: 35,
		textTransform: "none",
		fontSize: 14,

		[theme.breakpoints.down("sm")]: {
			marginRight: 5,
			width: 140,
		},
	},
	noAcc: {
		fontSize: 14,
		color: theme.palette.primary.btn,
		fontWeight: 400,
		textAlign: "center",
		marginRight: 21,
		whiteSpace: "nowrap",
		textTransform: "none",
		display: "inline-block",
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
	label: {
		fontSize: 19,
		color: theme.palette.primary.label,
		paddingLeft: "5px",
	},
	otherLabel: {
		fontSize: 14,
		color: theme.palette.primary.label,
		padding: "15px 0 15px 5px",
	},
	fileInput: {
		height: "2rem",
		marginTop: 0,
		fontSize: 15,
	},
	submit: {
		margin: theme.spacing(3, 2, 2),
		padding: 10,
		width: 160,
		height: 56,
		borderRadius: 3,
		marginTop: 49,
		fontSize: 16,
		fontWeight: "bold",
		backgroundColor: theme.palette.primary.main,
	},
	inputs: {
		marginTop: ".8rem",
		height: "2rem",
		padding: "5px",
	},
	link: { textDecoration: "none", flexWrap: "nowrap" },
	forgot: {
		paddingRight: 10,
		color: theme.palette.primary.main,
	},
})

export default loginPageStyles
