import { useState, useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"

import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles } from "@material-ui/core/styles"

import contactListStyles from "../../styles/chat/contactList"

import TextInput from "../UtilityComponents/TextInput"
import ProfileDisplay from "../User/ProfileDisplay"

import { fetchUserChatList } from "../../services/messages"
import socket from "../../socket"
import MessageContext from '../../context/MessageContext'
import AuthContext from '../../context/AuthContext'

const useStyles = makeStyles(contactListStyles)

const ContactList = props => {
	const classes = useStyles()
	const history = useHistory()

	const { setSelectedUser, selectedUser: { conversationId }, checkOnlineStatus, messages, setMessages } = useContext(MessageContext)
	const { user: { id }} = useContext(AuthContext)

	const [searchValue, setSearchValue] = useState("")
	const [chatListLoading, setChatListLoading] = useState(false)
	const [chatList, setChatList] = useState([])
	const [newMessage, setNewMessage] = useState({})
	const [conversationMessages, setConversationMessages] = useState({})

	useEffect(() => {
		setMessages({...messages, [conversationId]: conversationMessages })
	}, [conversationMessages])

	useEffect(() => {
		let allConversationMessages = []
		if(messages[newMessage.conversationId]) {
			allConversationMessages = [...messages[newMessage.conversationId], {...newMessage, read: newMessage.conversationId === conversationId }]
		}

		setMessages({...messages, [newMessage.conversationId]: allConversationMessages })
	}, [newMessage])

	useEffect(() => {
		const getChatList = async () => {
			try {
				setChatListLoading(true)
				const { conversations } = await fetchUserChatList()

				setChatList(conversations)
				setChatListLoading(false)
			} catch (error) {
				setChatListLoading(false)
				console.log(error)
			}
		}

		getChatList()

		socket.on("messages", messages => {
			setConversationMessages(messages)
		})

		socket.on("message", (newMessageBody) => {
			setNewMessage(newMessageBody)
		})
	}, [])

	const handleChange = e => {
		const { value } = e.target
		setSearchValue(value)
	}

	const selectChat = conversation => {
		const { conversationId, user: { username, id }} = conversation

		history.push(`/chat?cid=${conversationId}`)
		socket.emit("join conversation", conversationId)
		setSelectedUser({ username, id, conversationId })
	}

	const getNumberOfUnreadMessages = (msgConversationId) => {
		if(!msgConversationId) return
		if(conversationId === msgConversationId) return

		const conversationMessages = messages[msgConversationId]
		const unreadMessages = conversationMessages?.filter(msg => msg.read === false)?.filter(msg => msg.senderId !== id)

		return unreadMessages?.length
	}

	return (
		<div className={classes.root}>
			<Typography variant="h3" className={classes.heading}>
				Chats
			</Typography>

			<TextInput
				onChange={handleChange}
				classes={classes}
				value={searchValue}
				placeholder="Search"
				icon
			/>

			<Grid className={classes.usersList}>
				{chatListLoading ? (
					<CircularProgress />
				) : (
					chatList?.length > 0 &&
					chatList.map(list => (
						<div
							key={list.id}
							className={classes.contactList}
							onClick={() => selectChat(list)}
						>
							<ProfileDisplay
								name={list?.user?.username}
								message={list?.conversation?.lastMessage?.content}
								onlineStatus={checkOnlineStatus(list?.user?.id)}
								unread={getNumberOfUnreadMessages(list?.conversation?.id)}
							/>
						</div>
					))
				)}
			</Grid>
		</div>
	)
}

export default ContactList
