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

const useStyles = makeStyles(contactListStyles)

const ContactList = () => {
	const classes = useStyles()
	const history = useHistory()

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
	}, [])

	const handleChange = e => {
		const { value } = e.target
		setSearchValue(value)
	}

	const selectChat = conversationId => {
		history.push(`/chat?cid=${conversationId}`)
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
							/>
						</div>
					))
				)}
			</Grid>
		</div>
	)
}

export default ContactList
