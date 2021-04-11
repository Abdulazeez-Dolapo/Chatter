import { useContext } from 'react'

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import messageStyles from "../../styles/chat/message"

import AuthContext from '../../context/AuthContext'

import { formatDate } from '../../utils/helpers'

const useStyles = makeStyles(messageStyles)

const Message = ({ message }) => {
	const classes = useStyles()

	const { createdAt, content, sender: { username, id }} = message
	const { user } = useContext(AuthContext)

	const isSender = user.id === id

	return (
		<Grid
			className={classes.root}
			style={{
				justifyContent: isSender ? "flex-end" : "flex-start",
			}}
		>
			<Grid
				className={classes.timeContainer}
				style={{
					textAlign: isSender ? "end" : "start",
				}}
			>
				<Typography className={classes.time}>
					{username} {formatDate(createdAt)}
				</Typography>
			</Grid>

			<Grid
				className={
					isSender
						? classes.senderMessageContainer
						: classes.receiverMessageContainer
				}
			>
				<Typography className={classes.text}>{content}</Typography>
			</Grid>
		</Grid>
	)
}

export default Message
