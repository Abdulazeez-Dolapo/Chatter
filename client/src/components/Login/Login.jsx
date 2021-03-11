import { useEffect, Fragment } from "react"
import { Link, useHistory } from "react-router-dom"

import Notification from "../UtilityComponents/Notification"
import LoginForm from "../UtilityComponents/Form"

import { useNotification } from "../../hooks/notification"
import { loginUser } from "../../services/login"
import authPageStyles from "../../styles/authPage"

import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(authPageStyles)

export default function Login() {
	const { open, handleClose, message } = useNotification()
	const history = useHistory()
	const classes = useStyles()

	useEffect(() => {
		const user = localStorage.getItem("user")
		if (user) history.push("/dashboard")
	})

	const initialValues = {
		email: "",
		password: "",
	}

	const onSubmit = async (
		{ email, password },
		{ setStatus, setSubmitting }
	) => {
		console.log({ email, password })
		setStatus()
		loginUser(email, password).then(
			() => {
				return
			},
			error => {
				setSubmitting(false)
				setStatus(error)
			}
		)
	}

	return (
		<Fragment>
			<Box className={classes.buttonHeader}>
				<Box p={1} alignSelf="flex-end" alignItems="center">
					<Link to="/signup" className={classes.link}>
						<Button className={classes.noAccBtn}>
							Don't have an account?
						</Button>

						<Button className={classes.accBtn} variant="contained">
							Create account
						</Button>
					</Link>
				</Box>

				<Box width="100%" maxWidth={450} p={3} alignSelf="center">
					<Grid container>
						<Grid item xs>
							<p className={classes.welcome} component="h1" variant="h5">
								Welcome back!
							</p>
						</Grid>
					</Grid>

					<LoginForm
						type="login"
						onSubmit={onSubmit}
						classes={classes}
						initialValues={initialValues}
					/>
				</Box>

				<Box p={1} alignSelf="center" />
			</Box>

			<Notification
				open={open}
				message={message}
				handleClose={handleClose}
			/>
		</Fragment>
	)
}