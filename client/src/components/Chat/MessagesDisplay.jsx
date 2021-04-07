import { useContext } from "react"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import messagesDisplayStyles from "../../styles/chat/messagesDisplay"
import Message from "./Message"

import MessageContext from '../../context/MessageContext'
import AuthContext from '../../context/AuthContext'

const useStyles = makeStyles(messagesDisplayStyles)

const MessagesDisplay = () => {
	const classes = useStyles()

	const { messages, selectedUser: { conversationId } } = useContext(MessageContext)
	const { user } = useContext(AuthContext)

	return (
		<div className={classes.root}>
			{messages[conversationId]?.length > 0
				? messages[conversationId].map((message, index) => (
						<Grid
							key={index}
							className={
								message.senderId === user.id ? classes.senderRow : classes.receiverRow
							}
						>
							<Message message={message} />
						</Grid>
				  ))
				: ""}
		</div>
	)
}

export default MessagesDisplay
