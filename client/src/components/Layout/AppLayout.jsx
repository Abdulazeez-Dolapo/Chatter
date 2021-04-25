import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import Header from "./Header/Header"

import appLayoutStyles from "../../styles/layout/appLayout"

const useStyles = makeStyles(appLayoutStyles)

const AppLayout = props => {
	const classes = useStyles()

	return (
		<Grid component="main" container className={classes.root}>
			<Grid item xs={12} className={classes.header}>
				<Header />
			</Grid>

			<Grid item xs={12} className={classes.page}>
				{props.children}
			</Grid>
		</Grid>
	)
}

export default AppLayout
