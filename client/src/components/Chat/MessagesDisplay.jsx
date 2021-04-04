import { useState, useEffect } from "react"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import messagesDisplayStyles from "../../styles/chat/messagesDisplay"
import Message from "./Message"

const useStyles = makeStyles(messagesDisplayStyles)

const MessagesDisplay = () => {
	const classes = useStyles()

	const [messages, setMessages] = useState([])

	useEffect(() => {
		setMessages([
			{ time: "10:45", sender: true, text: "Hi there" },
			{ time: "10:45", sender: true, text: "Hi there" },
			{
				time: "10:45",
				sender: false,
				text:
					"Hi there Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. ",
			},
			{ time: "10:45", sender: true, text: "Hi there" },
			{ time: "10:45", sender: false, text: "Hi there" },
			{ time: "10:45", sender: false, text: "Hi there" },
			{ time: "10:45", sender: true, text: "Hi there" },
			{ time: "10:45", sender: false, text: "Hi there" },
			{
				time: "10:45",
				sender: true,
				text:
					"Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. ",
			},
			{ time: "10:45", sender: false, text: "Hi there" },
			{ time: "10:45", sender: true, text: "Hi there" },
			{ time: "10:45", sender: false, text: "Hi there" },
			{ time: "10:45", sender: true, text: "Hi there" },
			{ time: "10:45", sender: false, text: "Hi there" },
		])
	}, [])

	return (
		<div className={classes.root}>
			{messages?.length > 0
				? messages.map((message, index) => (
						<Grid
							key={index}
							className={
								message.sender ? classes.senderRow : classes.receiverRow
							}
						>
							<Message
								time={message.time}
								text={message.text}
								sender={message.sender}
							/>
						</Grid>
				  ))
				: ""}
		</div>
	)
}

export default MessagesDisplay
