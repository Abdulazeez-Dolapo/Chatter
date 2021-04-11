const express = require("express")

const { authenticate } = require("../middlewares/auth")
const { searchForUser } = require("../controllers/user")

const userRouter = express.Router()

userRouter.get("/users/search", authenticate, searchForUser)

module.exports = userRouter
