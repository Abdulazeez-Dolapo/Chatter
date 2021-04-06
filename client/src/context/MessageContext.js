import { useState, createContext } from "react"

const MessageContext = createContext()

export const MessageProvider = ({ children }) => {
	const [messages, setMessages] = useState([])
	const [onlineUsers, setOnlineUsers] = useState([])
	const [selectedUser, setSelectedUser] = useState({})

	const checkOnlineStatus = userId => {
		return onlineUsers.find(user => user.userId === userId)
	}

	return (
		<MessageContext.Provider
			value={{ messages, setMessages, selectedUser, setSelectedUser, onlineUsers, setOnlineUsers, checkOnlineStatus }}
		>
			{children}
		</MessageContext.Provider>
	)
}

export default MessageContext
