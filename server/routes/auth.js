const express = require("express")
const { registerUser } = require("../controllers/auth/register")

const authRouter = express.Router()

authRouter.post("/auth/register", registerUser)

module.exports = authRouter
