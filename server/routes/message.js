const express = require("express")

const { authenticate } = require("../middlewares/auth")
const { saveNewMessage } = require("../controllers/message/save")

const messageRouter = express.Router()

messageRouter.post("/message", authenticate, saveNewMessage)

module.exports = messageRouter
