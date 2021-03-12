import { useEffect, useState } from "react"
import { Redirect, Route } from "react-router-dom"

import CircularProgress from "@material-ui/core/CircularProgress"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import { checkCookie } from "../../services/cookie"
import protectedRouteStyles from "../../styles/protectedRoute"

const useStyles = makeStyles(protectedRouteStyles)

const ProtectedRoute = ({ children, path }) => {
	const classes = useStyles()

	const [isLoggedIn, setIsLoggedIn] = useState(true)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)

		checkCookie()
			.then(res => {
				setIsLoggedIn(res.confirmed)
				setLoading(false)
			})
			.catch(() => {
				setLoading(false)
				setIsLoggedIn(false)
			})
	}, [])

	return loading ? (
		<Grid className={classes.root}>
			<CircularProgress size={100} color="primary" />
		</Grid>
	) : isLoggedIn ? (
		<Route path={path}>{children}</Route>
	) : (
		<Redirect to="/login" />
	)
}

export default ProtectedRoute
