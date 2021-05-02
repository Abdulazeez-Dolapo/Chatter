import { useContext } from "react"
import { Redirect, Route } from "react-router-dom"

import CircularProgress from "@material-ui/core/CircularProgress"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import AuthContext from "../../context/AuthContext"

import protectedRouteStyles from "../../styles/protectedRoute"

const useStyles = makeStyles(protectedRouteStyles)

const ProtectedRoute = ({ children, path, authPage }) => {
	const classes = useStyles()
	const { isLoggedIn, loading } = useContext(AuthContext)
	
	const displayUI = authPage => {
		if (authPage) {
			return isLoggedIn ? (
				<Redirect to="/chat" />
			) : (
				<Route path={path}>{children}</Route>
			)
		}

		return isLoggedIn ? (
			<Route path={path}>{children}</Route>
		) : (
			<Redirect to="/login" />
		)
	}

	return loading ? (
		<Grid className={classes.root}>
			<CircularProgress size={100} color="primary" />
		</Grid>
	) : (
		displayUI(authPage)
	)
}

export default ProtectedRoute
