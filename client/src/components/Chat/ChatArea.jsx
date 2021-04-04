import { useState } from "react"

import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import UserInfo from "../User/UserInfo"
import TextInput from "../UtilityComponents/TextInput"
import MessagesDisplay from "./MessagesDisplay"

import chatAreaStyles from "../../styles/chat/chatArea"

const useStyles = makeStyles(chatAreaStyles)

const ChatArea = () => {
	const classes = useStyles()

	const [message, setMessage] = useState("")

	const handleChange = e => {
		const { value } = e.target
		setMessage(value)
	}

	return (
		<div className={classes.root}>
			<UserInfo onlineStatus />
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
