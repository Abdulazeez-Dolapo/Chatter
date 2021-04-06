import { useState, createContext } from "react"

const MessageContext = createContext()

export const MessageProvider = ({ children }) => {
	const [messages, setMessages] = useState([])

	return (
		<MessageContext.Provider
			value={{ messages, setMessages }}
		>
			{children}
		</MessageContext.Provider>
	)
}

export default MessageContext
