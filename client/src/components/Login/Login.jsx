import { useState, useEffect, Fragment } from "react"
import { Link, useHistory } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"

import Notification from "../UtilityComponents/Notification"

import { loginUser } from "../../services/login"
import loginPageStyles from "../../styles/loginPage"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(loginPageStyles)

export default function Login() {
	const history = useHistory()
	const classes = useStyles()
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const user = localStorage.getItem("user")
		if (user) history.push("/dashboard")
	})

	const onSubmit = async (
		{ email, password },
		{ setStatus, setSubmitting }
	) => {
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

	const handleClose = (event, reason) => {
		if (reason === "clickaway") return
		setOpen(false)
	}

	return (
		<Fragment>
			<Box className={classes.buttonHeader}>
				<Box p={1} alignSelf="flex-end" alignItems="center">
					<Link to="/signup" className={classes.link}>
						<Button className={classes.noAccBtn}>
							Don't have an account?
						</Button>

						<Button
							color="background"
							className={classes.accBtn}
							variant="contained"
						>
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

					<Formik
						initialValues={{
							email: "",
							password: "",
						}}
						validationSchema={Yup.object().shape({
							email: Yup.string()
								.required("Email is required")
								.email("Email is not valid"),
							password: Yup.string()
								.required("Password is required")
								.max(100, "Password is too long")
								.min(6, "Password too short"),
						})}
						onSubmit={onSubmit}
					>
						{({
							handleSubmit,
							handleChange,
							values,
							touched,
							errors,
						}) => (
							<form
								onSubmit={handleSubmit}
								className={classes.form}
								noValidate
							>
								<TextField
									id="email"
									label={
										<p className={classes.label}>E-mail address</p>
									}
									fullWidth
									margin="normal"
									InputLabelProps={{
										shrink: true,
									}}
									InputProps={{
										classes: { input: classes.inputs },
									}}
									name="email"
									autoComplete="email"
									autoFocus
									helperText={touched.email ? errors.email : ""}
									error={touched.email && Boolean(errors.email)}
									value={values.email}
									onChange={handleChange}
								/>

								<TextField
									id="password"
									label={
										<Typography className={classes.label}>
											Password
										</Typography>
									}
									fullWidth
									margin="normal"
									InputLabelProps={{
										shrink: true,
									}}
									InputProps={{
										classes: { input: classes.inputs },
										endAdornment: (
											<Typography className={classes.forgot}>
												Forgot?
											</Typography>
										),
									}}
									type="password"
									autoComplete="current-password"
									helperText={touched.password ? errors.password : ""}
									error={touched.password && Boolean(errors.password)}
									value={values.password}
									onChange={handleChange}
									type="password"
								/>

								<Box textAlign="center">
									<Button
										type="submit"
										size="large"
										variant="contained"
										color="primary"
										className={classes.submit}
									>
										Login
									</Button>
								</Box>

								<div style={{ height: 95 }} />
							</form>
						)}
					</Formik>
				</Box>

				<Box p={1} alignSelf="center" />
			</Box>

			<Notification open={open} handleClose={handleClose} />
		</Fragment>
	)
}
