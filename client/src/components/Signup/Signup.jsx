import { useEffect, Fragment } from "react"
import { Link, useHistory } from "react-router-dom"

import Notification from "../UtilityComponents/Notification"
import SignupForm from "../UtilityComponents/Form"

import { useNotification } from "../../hooks/notification"
import { signupUser } from "../../services/signup"
import authPageStyles from "../../styles/authPage"

import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(authPageStyles)

export default function Register() {
	const { open, handleClose, message } = useNotification()
	const classes = useStyles()
	const history = useHistory()

	useEffect(() => {
		const user = localStorage.getItem("user")
		if (user) history.push("/dashboard")
	})

	const initialValues = {
		username: "",
		email: "",
		password: "",
	}

	const onSubmit = (
		{ username, email, password },
		{ setStatus, setSubmitting }
	) => {
		console.log({ username, email, password })
		setStatus()
		signupUser(username, email, password).then(
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
					<Link to="/login" className={classes.link}>
						<Button className={classes.noAccBtn}>
							Already have an account?
						</Button>

						<Button className={classes.accBtn} variant="contained">
							Login
						</Button>
					</Link>
				</Box>

				<Box width="100%" maxWidth={450} p={3} alignSelf="center">
					<Grid container>
						<Grid item xs>
							<p className={classes.welcome} component="h1" variant="h5">
								Create an account
							</p>
						</Grid>
					</Grid>

					<SignupForm
						type="signup"
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
