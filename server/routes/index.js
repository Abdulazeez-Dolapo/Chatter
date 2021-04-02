const express = require("express")

const authRoutes = require("./auth")
const messageRoutes = require("./message")
const userRoutes = require("./user")

const router = express.Router()

router.use("/", authRoutes)
router.use("/", messageRoutes)
router.use("/", userRoutes)

module.exports = router
