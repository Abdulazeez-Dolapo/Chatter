import { useState, useContext } from "react"

import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import UserInfo from "../User/UserInfo"
import TextInput from "../UtilityComponents/TextInput"
import MessagesDisplay from "./MessagesDisplay"

import chatAreaStyles from "../../styles/chat/chatArea"
import MessageContext from '../../context/MessageContext'

const useStyles = makeStyles(chatAreaStyles)

const ChatArea = () => {
	const classes = useStyles()
	const { selectedUser: { username, id }, checkOnlineStatus } = useContext(MessageContext)

	const [message, setMessage] = useState("")

	const handleChange = e => {
		const { value } = e.target
		setMessage(value)
	}

	return (
		<div className={classes.root}>
			<UserInfo username={username} onlineStatus={checkOnlineStatus(id)} />

			<MessagesDisplay />

			<Grid className={classes.textInput}>
				<TextInput
					onChange={handleChange}
					value={message}
					multiline={true}
					placeholder="Type something..."
					rows={4}
				/>
			</Grid>
		</div>
	)
}

export default ChatArea
