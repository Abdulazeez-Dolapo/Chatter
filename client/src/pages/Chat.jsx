import { useContext } from "react"

import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import ProfileDisplay from "../components/User/ProfileDisplay"
import ContactList from "../components/Chat/ContactList"
import ChatArea from "../components/Chat/ChatArea"

import AuthContext from "../context/AuthContext"

import chatPageStyles from "../styles/chat/chatPage"

const useStyles = makeStyles(chatPageStyles)

const Chat = () => {
	const classes = useStyles()
	const { user } = useContext(AuthContext)

	return (
		<Grid container className={classes.root}>
			<Grid item xs={12} sm={4}>
				<Grid className={classes.profile}>
					<ProfileDisplay name={user?.username} />
				</Grid>

				<ContactList />
			</Grid>

			<Grid item xs={12} sm={8} className={classes.chatArea}>
				<ChatArea />
			</Grid>
		</Grid>
	)
}

export default Chat
