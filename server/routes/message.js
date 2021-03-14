const express = require("express")

const { authenticate } = require("../middlewares/auth")
const { saveNewMessage, fetchAllMessagesInConversation } = require("../controllers/message")
const { fetchUserConversations } = require("../controllers/message/conversation")

const messageRouter = express.Router()

messageRouter.post("/message", authenticate, saveNewMessage)
messageRouter.get("/message/conversations", authenticate, fetchUserConversations)
messageRouter.get("/message/conversations/:conversationId", fetchAllMessagesInConversation)

module.exports = messageRouter
