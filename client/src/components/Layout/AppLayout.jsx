import Grid from "@material-ui/core/Grid"
// import { makeStyles } from "@material-ui/core/styles"

import Header from './Header/Header'

// import authLayoutStyles from "../../styles/authLayout"

// const useStyles = makeStyles(authLayoutStyles)

const AppLayout = props => {
	// const classes = useStyles()

	return (
		// <Grid component="main" container className={classes.root}>
		<Grid component="main" container >
			<Header />

			<Grid item xs={12}>
				{props.children}
			</Grid>
		</Grid>
	)
}

export default AppLayout
