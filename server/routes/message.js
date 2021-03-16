const express = require("express")

const { authenticate } = require("../middlewares/auth")
const { saveNewMessage, fetchAllMessagesInConversation } = require("../controllers/message")
const { fetchUserConversations, createConversation } = require("../controllers/message/conversation")

const messageRouter = express.Router()

messageRouter.post("/message", authenticate, saveNewMessage)
messageRouter.get("/conversations", authenticate, fetchUserConversations)
messageRouter.get("/conversations/:conversationId", fetchAllMessagesInConversation)
messageRouter.post("/conversation", authenticate, createConversation)

module.exports = messageRouter
