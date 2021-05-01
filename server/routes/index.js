const express = require("express")

const authRoutes = require("./auth")
const messageRoutes = require("./message")
const userRoutes = require("./user")
const uploadRoutes = require("./upload")

const router = express.Router()

router.use("/", authRoutes)
router.use("/", messageRoutes)
router.use("/", userRoutes)
router.use("/", uploadRoutes)

module.exports = router
