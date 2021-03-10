const express = require("express")

const welcomeRoutes = require("./welcome")

const router = express.Router()

router.use("/", welcomeRoutes)

module.exports = router
