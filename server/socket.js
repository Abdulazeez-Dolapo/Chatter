const socketConnection = server => {
	const io = require("socket.io")(server, {
		cors: {
			origin: process.env.FRONTEND_URL,
		},
	})

	io.on("connection", async socket => {
		console.log(socket)
	})
}

module.exports = socketConnection
