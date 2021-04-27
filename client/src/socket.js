import io from "socket.io-client"

const ENDPOINT = process.env.REACT_APP_CHAT_URL
const socket = io(ENDPOINT, { autoConnect: false, withCredentials: true })

socket.onAny((event, ...args) => {
	console.log(event, args)
})

export default socket
