const express = require("express")

const { authenticate } = require("../middlewares/auth")
const { saveNewMessage } = require("../controllers/message/save")
const { fetchUserConversations } = require("../controllers/message/conversation")

const messageRouter = express.Router()

messageRouter.post("/message", authenticate, saveNewMessage)
messageRouter.get("/message/conversations", authenticate, fetchUserConversations)

module.exports = messageRouter
