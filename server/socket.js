const { verifyToken } = require("./utils/token")

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

			next()
		} catch (error) {
			console.log(error)
		}
	}).on("connection", async socket => {
		try {
			console.log(socket.userId, "connected")

			// Find and emit all connected (online) users
			const users = []
			for (let [id, socket] of io.of("/").sockets) {
				users.push({ userId: socket.userId })
			}

			socket.emit("users", users)

			// notify existing users when a user connects
			socket.broadcast.emit("user connected", {
				userId: socket.userId,
			})

			socket.on("disconnect", () => {
				// notify existing users when a user disconnects
				socket.broadcast.emit("user disconnected", {
					userId: socket.userId,
				})
			})
		} catch (error) {
			console.log(error)
		}
	})
}

module.exports = socketConnection
