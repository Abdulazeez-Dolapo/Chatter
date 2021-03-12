import { Link } from "react-router-dom"

import Notification from "../UtilityComponents/Notification"
import Form from "../UtilityComponents/Form"

import { useNotification } from "../../hooks/notification"

import authPageStyles from "../../styles/authPage"

import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(authPageStyles)

export default function Auth(props) {
	const { open, handleClose, message } = useNotification()
	const classes = useStyles()

	const { onFormSubmit, initialValues, type, routeTo } = props

	const onSubmit = (formData, { setStatus, setSubmitting }) => {
		setStatus()
		onFormSubmit(formData).then(
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
		<Grid>
			<Box className={classes.buttonHeader}>
				<Box p={1} alignSelf="flex-end" alignItems="center">
					<Typography className={classes.noAcc}>
						{type === "signup"
							? "Already have an account?"
							: "Don't have an account"}
					</Typography>

					<Link to={routeTo} className={classes.link}>
						<Button className={classes.accBtn} variant="contained">
							{type === "signup" ? "Login" : "Create account"}
						</Button>
					</Link>
				</Box>

				<Box width="100%" maxWidth={450} p={3} alignSelf="center">
					<Grid container>
						<Grid item xs>
							<p className={classes.welcome} component="h1" variant="h5">
								{type === "signup"
									? "Create an account"
									: "Welcome back"}
							</p>
						</Grid>
					</Grid>

					<Form
						type={type}
						onSubmit={onSubmit}
						classes={classes}
						initialValues={initialValues}
					/>
				</Box>
			</Box>

			<Notification
				open={open}
				message={message}
				handleClose={handleClose}
			/>
		</Grid>
	)
}
