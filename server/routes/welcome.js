const express = require("express")

const welcomeRouter = express.Router()

welcomeRouter.get("/welcome", function (req, res, next) {
	res.status(200).send({ welcomeMessage: "Welcome!" })
})

module.exports = welcomeRouter
