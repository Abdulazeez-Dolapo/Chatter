import io from "socket.io-client"

const ENDPOINT = process.env.REACT_APP_CHAT_URL

const socket = io(ENDPOINT, { transports: ["websocket"] })

// on reconnection, reset the transports option, as the Websocket
// connection may have failed (caused by proxy, firewall, browser, ...)
socket.on("reconnect_attempt", () => {
	socket.io.opts.transports = ["polling", "websocket"]
})

export default socket
