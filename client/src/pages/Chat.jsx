import { useContext, useEffect, useState } from "react"

import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import ProfileDisplay from "../components/User/ProfileDisplay"
import ContactList from "../components/Chat/ContactList"
import ChatArea from "../components/Chat/ChatArea"

import AuthContext from "../context/AuthContext"
import socket from "../socket"

import chatPageStyles from "../styles/chat/chatPage"

const useStyles = makeStyles(chatPageStyles)

const Chat = () => {
	const classes = useStyles()
	const { user } = useContext(AuthContext)

	const [onlineUsers, setOnlineUsers] = useState([])

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
		})

		socket.on("user disconnected", user => {
			const newOnlineUsers = onlineUsers.filter(
				onlineUser => onlineUser.userId !== user.userId
			)
			setOnlineUsers(newOnlineUsers)
		})

		return () => {
			socket.disconnect()
		}
	}, [])

	return (
		<Grid container className={classes.root}>
			<Grid item xs={12} sm={4}>
				<Grid className={classes.profile}>
					<ProfileDisplay name={user?.username} onlineStatus={true} />
				</Grid>

				<ContactList onlineUsers={onlineUsers} />
			</Grid>

			<Grid item xs={12} sm={8} className={classes.chatArea}>
				<ChatArea />
			</Grid>
		</Grid>
	)
}

export default Chat
