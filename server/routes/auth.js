const express = require("express")

const { authenticate } = require("../middlewares/auth")

const { registerUser } = require("../controllers/auth/register")
const { loginUser } = require("../controllers/auth/login")
const { readCookie } = require("../controllers/auth/cookie")

const authRouter = express.Router()

authRouter.post("/auth/register", registerUser)
authRouter.post("/auth/login", loginUser)
authRouter.get("/auth/cookie-status", authenticate, readCookie)

module.exports = authRouter
