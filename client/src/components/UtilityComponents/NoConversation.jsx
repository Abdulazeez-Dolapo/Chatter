import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

import noConversationStyles from "../../styles/noConversation"

const useStyles = makeStyles(noConversationStyles)

const NoConversation = props => {
	const classes = useStyles()
	const { message, buttonText, imageLink } = props

	return (
		<Paper className={classes.root} elevation={0}>
			<div className={classes.imageContainer}>
				<img
					src={`/Images/${imageLink}`}
					alt={message}
					width="40%"
					height="40%"
				/>
			</div>

			<div className={classes.textContainer}>
				<Typography className={classes.message}>{message}</Typography>
			</div>

			{buttonText && (
				<div className={classes.linkContainer}>
					<Button
						className={classes.button}
						variant="contained"
						color="primary"
					>
						{buttonText}
					</Button>
				</div>
			)}
		</Paper>
	)
}

export default NoConversation
