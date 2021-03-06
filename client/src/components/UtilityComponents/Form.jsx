import { Formik } from "formik"

import getValidationSchema from "../../utils/validationSchema"

import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import CircularProgress from "@material-ui/core/CircularProgress"

const Form = props => {
	const {
		onSubmit,
		classes,
		type,
		initialValues,
		loading,
		setProfilePicture,
	} = props

	const handleImageChange = e => {
		setProfilePicture(e.target.files)
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={getValidationSchema(type)}
			onSubmit={onSubmit}
		>
			{({ handleSubmit, handleChange, values, touched, errors }) => (
				<form onSubmit={handleSubmit} className={classes.form} noValidate>
					{type === "signup" && (
						<TextField
							id="username"
							label={
								<Typography className={classes.label}>
									Username
								</Typography>
							}
							fullWidth
							margin="normal"
							InputLabelProps={{
								shrink: true,
							}}
							InputProps={{
								classes: { input: classes.inputs },
							}}
							name="username"
							autoComplete="username"
							autoFocus
							helperText={touched.username ? errors.username : ""}
							error={touched.username && Boolean(errors.username)}
							value={values.username}
							onChange={handleChange}
						/>
					)}

					{type === "signup" && (
						<>
							<Typography className={classes.otherLabel}>
								Profile Image
							</Typography>

							<input
								className={classes.fileInput}
								accept="image/*"
								type="file"
								name="profilePicture"
								onChange={handleImageChange}
							/>
						</>
					)}

					<TextField
						id="email"
						label={
							<Typography className={classes.label}>
								E-mail address
							</Typography>
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
						helperText={touched.email ? errors.email : ""}
						error={touched.email && Boolean(errors.email)}
						value={values.email}
						onChange={handleChange}
					/>

					<TextField
						id="password"
						label={
							<Typography className={classes.label}>Password</Typography>
						}
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
						InputProps={{
							classes: { input: classes.inputs },
						}}
						type="password"
						autoComplete="current-password"
						helperText={touched.password ? errors.password : ""}
						error={touched.password && Boolean(errors.password)}
						value={values.password}
						onChange={handleChange}
					/>

					<Box textAlign="center">
						<Button
							type="submit"
							size="large"
							variant="contained"
							color="primary"
							className={classes.submit}
							disabled={loading}
						>
							{loading ? (
								<CircularProgress />
							) : type === "signup" ? (
								"Create"
							) : (
								"Login"
							)}
						</Button>
					</Box>
				</form>
			)}
		</Formik>
	)
}

export default Form
