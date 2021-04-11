import { useContext, useEffect, useRef } from "react"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import messagesDisplayStyles from "../../styles/chat/messagesDisplay"
import Message from "./Message"

import MessageContext from "../../context/MessageContext"
import AuthContext from "../../context/AuthContext"

const useStyles = makeStyles(messagesDisplayStyles)

const MessagesDisplay = () => {
	const classes = useStyles()
	const messageDisplay = useRef(null)

	const {
		messages,
		selectedUser: { conversationId },
	} = useContext(MessageContext)
	const { user } = useContext(AuthContext)

	const conversations = messages[conversationId]

	const scrollToBottom = () => {
		const messageContainer = messageDisplay.current
		messageContainer.scrollTo({
			top: messageContainer.scrollHeight,
			behavior: "smooth",
		})
	}

	useEffect(() => {
		scrollToBottom()
	}, [conversations])

	return (
		<div className={classes.root} ref={messageDisplay}>
			{conversations?.length > 0
				? conversations.map((message, index) => (
						<Grid
							key={index}
							className={
								message.senderId === user.id
									? classes.senderRow
									: classes.receiverRow
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
