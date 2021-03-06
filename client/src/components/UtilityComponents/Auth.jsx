import { useState, useContext } from "react"
import { Link, useHistory } from "react-router-dom"

import Notification from "../UtilityComponents/Notification"
import Form from "../UtilityComponents/Form"

import { useNotification } from "../../hooks/notification"
import authPageStyles from "../../styles/authPage"
import AuthContext from "../../context/AuthContext"
import { MAX_IMAGE_SIZE_ALLOWED } from "../../utils/constants"

import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(authPageStyles)

export default function Auth(props) {
	const { open, handleClose, message, setMessage, setOpen } = useNotification()
	const classes = useStyles()
	const history = useHistory()

	const [loading, setLoading] = useState(false)
	const [profilePicture, setProfilePicture] = useState(null)

	const { setUser, setIsLoggedIn } = useContext(AuthContext)

	const { onFormSubmit, initialValues, type, routeTo, uploadImage } = props

	const validateImageSize = imageSize => {
		return MAX_IMAGE_SIZE_ALLOWED >= imageSize
	}

	const handleImageUpload = async image => {
		return await uploadImage(image)
	}

	const onSubmit = async formData => {
		try {
			setLoading(true)
			let imageUrl = "https://picsum.photos/id/237/200/300"

			if (profilePicture) {
				if (!validateImageSize(profilePicture[0].size)) {
					const errMessage = "Image should not be more than 100kb"
					setMessage(errMessage)
					setOpen(true)
					setLoading(false)
					return
				}

				const newFormData = new FormData()
				for (let index = 0; index < profilePicture.length; index++) {
					newFormData.append("files", profilePicture[index])
				}

				const { files } = await handleImageUpload(newFormData)
				imageUrl = files[0].Location
			}

			const userData =
				type === "signup" ? { ...formData, imageUrl } : formData
			const res = await onFormSubmit(userData)

			setUser(res.user)
			setIsLoggedIn(true)

			setLoading(false)
			history.push("/chat")
		} catch (error) {
			const errMessage =
				error?.errors || "An error occurred. Please try again."

			setMessage(errMessage)
			setLoading(false)
			setOpen(true)
		}
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
						loading={loading}
						type={type}
						onSubmit={onSubmit}
						classes={classes}
						initialValues={initialValues}
						setProfilePicture={setProfilePicture}
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
