const { verifyToken } = require("./utils/token")
const { findAllMessages, saveMessage } = require('./queries/message')

const socketConnection = server => {
	const io = require("socket.io")(server, {
		cors: {
			origin: process.env.FRONTEND_URL,
		},
	})

	io.use((socket, next) => {
		try {
			const cookies = socket.handshake.headers.cookie

			if (!cookies) return next(new Error("Authentication error"))

			const tokenIndex = cookies.indexOf("token")
			let token = cookies.slice(tokenIndex, cookies.length)
			token = token.split("=")[1]

			const decoded = verifyToken(token)

			if (!decoded) return next(new Error("Authentication error"))

			socket.userId = decoded.id
			socket.username = decoded.username

			next()
		} catch (error) {
			console.log(error)
		}
	}).on("connection", async socket => {
		try {
			console.log(socket.username, "connected")
			const { username, userId } = socket

			// Find and emit all connected (online) users
			const users = []
			for (let [id, socket] of io.of("/").sockets) {
				users.push({ userId: socket.userId })
			}

			socket.emit("users", users)

			// Notify existing users when a user connects
			socket.broadcast.emit("user connected", { userId })

			// Join a conversation, fetch all messages in said conversation and send it on
			socket.on("join conversation", async (conversationId) => {
				socket.join(conversationId)
				const messages = await findAllMessages(conversationId, ["sender"])
				socket.emit("messages", messages)
			})

			// Handle a new message sent by a user 
			socket.on('send message', async messageBody => {
				const { content, conversationId } = messageBody
				const message = await saveMessage({ content, conversationId, senderId: userId})
				const newMessage = { ...message.dataValues, sender: { id: userId, username }}
				io.to(conversationId).emit("message", newMessage)
			})

			socket.on("disconnect", () => {
				// Notify existing users when a user disconnects
				socket.broadcast.emit("user disconnected", { userId })
			})
		} catch (error) {
			console.log(error)
		}
	})
}

module.exports = socketConnection
