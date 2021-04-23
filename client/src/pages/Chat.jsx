import { useContext, useEffect } from "react"

import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import ProfileDisplay from "../components/User/ProfileDisplay"
import ContactList from "../components/Chat/ContactList"
import ChatArea from "../components/Chat/ChatArea"
import Notification from "../components/UtilityComponents/Notification"
import AppLayout from "../components/Layout/AppLayout"

import AuthContext from "../context/AuthContext"
import MessageContext from "../context/MessageContext"
import socket from "../socket"
import { useNotification } from "../hooks/notification"

import chatPageStyles from "../styles/chat/chatPage"

const useStyles = makeStyles(chatPageStyles)

const Chat = () => {
	const classes = useStyles()
	const { open, handleClose, message, setMessage, setOpen } = useNotification()

	const { user } = useContext(AuthContext)
	const { onlineUsers, setOnlineUsers } = useContext(MessageContext)

	useEffect(() => {
		socket.connect()

		socket.on("connect_error", err => {
			console.log("socket connection error", err)
		})

		socket.on("users", users => {
			setOnlineUsers(users)
		})

		socket.on("user connected", user => {
			setOnlineUsers([...onlineUsers, user])
			setMessage(`${user.username} is online`)
			setOpen(true)
		})

		socket.on("user disconnected", user => {
			const newOnlineUsers = onlineUsers.filter(
				onlineUser => onlineUser.userId !== user.userId
			)
			setOnlineUsers(newOnlineUsers)
			setMessage(`${user.username} has gone offline`)
			setOpen(true)
		})

		return () => {
			socket.disconnect()
			socket.off("connect_error")
		}
	}, [])

	return (
		<AppLayout>
			<Grid container className={classes.root}>
				<Grid item xs={12} sm={4}>
					<Grid className={classes.profile}>
						<ProfileDisplay name={user?.username} onlineStatus={true} />
					</Grid>

					<ContactList />
				</Grid>

				<Grid item xs={12} sm={8} className={classes.chatArea}>
					<ChatArea />
				</Grid>

				<Notification
					open={open}
					message={message}
					handleClose={handleClose}
				/>
			</Grid>
		</AppLayout>
	)
}

export default Chat
