const express = require("express")
const { registerUser } = require("../controllers/auth/register")
const { loginUser } = require("../controllers/auth/login")

const authRouter = express.Router()

authRouter.post("/auth/register", registerUser)
authRouter.post("/auth/login", loginUser)

module.exports = authRouter
