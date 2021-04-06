import { useState, useEffect } from "react"
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

const useStyles = makeStyles(contactListStyles)

const ContactList = props => {
	const classes = useStyles()
	const history = useHistory()

	const { onlineUsers, addMessages } = props

	const [searchValue, setSearchValue] = useState("")
	const [chatListLoading, setChatListLoading] = useState(false)
	const [chatList, setChatList] = useState([])
	

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
			addMessages(messages)
		})
	}, [])

	const handleChange = e => {
		const { value } = e.target
		setSearchValue(value)
	}

	const selectChat = conversationId => {
		history.push(`/chat?cid=${conversationId}`)
		socket.emit("join conversation", conversationId)
	}

	const checkOnlineStatus = userId => {
		return onlineUsers.find(user => user.userId === userId)
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
							onClick={() => selectChat(list.conversationId)}
						>
							<ProfileDisplay
								name={list?.user?.username}
								message={list?.conversation?.lastMessage?.content}
								onlineStatus={checkOnlineStatus(list?.user?.id)}
							/>
						</div>
					))
				)}
			</Grid>
		</div>
	)
}

export default ContactList
