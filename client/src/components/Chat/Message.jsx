import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import messageStyles from "../../styles/chat/message"

const useStyles = makeStyles(messageStyles)

const Message = props => {
	const classes = useStyles()

	const { time, text, sender } = props

	return (
		<Grid
			className={classes.root}
			style={{
				justifyContent: sender ? "flex-end" : "flex-start",
			}}
		>
			<Grid
				className={classes.timeContainer}
				style={{
					textAlign: sender ? "end" : "start",
				}}
			>
				<Typography className={classes.time}> {time} </Typography>
			</Grid>

			<Grid
				className={
					sender
						? classes.senderMessageContainer
						: classes.receiverMessageContainer
				}
			>
				<Typography className={classes.text}>{text}</Typography>
			</Grid>
		</Grid>
	)
}

export default Message
