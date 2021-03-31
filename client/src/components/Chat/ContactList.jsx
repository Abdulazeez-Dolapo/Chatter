import { useState, useEffect } from "react"

import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import contactListStyles from "../../styles/chat/contactList"

import TextInput from "../UtilityComponents/TextInput"
import ProfileDisplay from "../User/ProfileDisplay"

const useStyles = makeStyles(contactListStyles)

const ContactList = () => {
	const classes = useStyles()

	const [searchValue, setSearchValue] = useState("")
	const [chatList, setChatList] = useState([])

	useEffect(() => {
		setChatList([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
	}, [])

	const handleChange = e => {
		const { value } = e.target
		setSearchValue(value)
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
				{chatList?.length > 0 &&
					chatList.map((list, index) => (
						<div key={index} className={classes.contactList}>
							<ProfileDisplay />
						</div>
					))}
			</Grid>
		</div>
	)
}

export default ContactList
