const express = require("express")

const welcomeRoutes = require("./welcome")
const pingRoutes = require("./ping")
const authRoutes = require("./auth")
const messageRoutes = require("./message")

const router = express.Router()

router.use("/", welcomeRoutes)
router.use("/", pingRoutes)
router.use("/", authRoutes)
router.use("/", messageRoutes)

module.exports = router
