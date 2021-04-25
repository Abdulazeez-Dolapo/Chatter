import { useState, useContext } from "react"

import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import UserInfo from "../User/UserInfo"
import TextInput from "../UtilityComponents/TextInput"
import MessagesDisplay from "./MessagesDisplay"
import NoConversation from "../UtilityComponents/NoConversation"

import chatAreaStyles from "../../styles/chat/chatArea"
import MessageContext from "../../context/MessageContext"

import socket from "../../socket"

const useStyles = makeStyles(chatAreaStyles)

const ChatArea = () => {
	const classes = useStyles()
	const {
		selectedUser: { username, id, conversationId },
		checkOnlineStatus,
	} = useContext(MessageContext)

	const [message, setMessage] = useState("")

	const handleChange = e => {
		const { value } = e.target
		setMessage(value)
	}

	const handleKeyPress = e => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault()
			sendMessage(message)
			setMessage("")
		}
	}

	const sendMessage = message => {
		const body = { content: message, conversationId }
		socket.emit("send message", body)
	}

	return conversationId ? (
		<div className={classes.root}>
			<div className={classes.userInfo}>
				<UserInfo username={username} onlineStatus={checkOnlineStatus(id)} />
			</div>

			<div className={classes.messageDisplay}>
				<MessagesDisplay />
			</div>

			<Grid className={classes.textInput}>
				<TextInput
					onChange={handleChange}
					value={message}
					multiline={true}
					placeholder="Type something..."
					rows={4}
					handleKeyPress={handleKeyPress}
				/>
			</Grid>
		</div>
	) : (
		<div style={{ height: "30%" }}>
			<NoConversation
				message="No Chat selected. Select one from the list of Chats or use the search bar to search for other users."
				imageLink="notification.svg"
			/>
		</div>
	)
}

export default ChatArea
