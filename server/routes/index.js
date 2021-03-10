const express = require("express")

const welcomeRoutes = require("./welcome")
const pingRoutes = require("./ping")

const router = express.Router()

router.use("/", welcomeRoutes)
router.use("/", pingRoutes)

module.exports = router
