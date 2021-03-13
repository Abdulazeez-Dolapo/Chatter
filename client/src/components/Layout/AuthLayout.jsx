import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Hidden from "@material-ui/core/Hidden"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import authLayoutStyles from "../../styles/authLayout"

const useStyles = makeStyles(authLayoutStyles)

const AuthLayout = props => {
	const classes = useStyles()

	return (
		<Grid component="main" container className={classes.root}>
			<CssBaseline />

			<Hidden xsDown>
				<Grid item xs={false} sm={4} md={5} className={classes.image}>
					<Box className={classes.overlay}>
						<Hidden xsDown>
							<img
								alt="chatBubble"
								width={67}
								src="/Images/chatBubble.png"
							/>

							<p className={classes.heroText}>
								Converse with anyone with any language
							</p>
						</Hidden>
					</Box>
				</Grid>
			</Hidden>

			<Grid item xs={12} sm={8} md={7}>
				{props.children}
			</Grid>
		</Grid>
	)
}

export default AuthLayout
