const createError = require("http-errors")
const express = require("express")
const { join } = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")

const appRoutes = require("./routes")

const { json, urlencoded } = express

const app = express()

app.use(logger("dev"))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(join(__dirname, "public")))

app.use("/api", appRoutes)

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL)
	res.header("Access-Control-Allow-Credentials", true)
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-WIth, Content-Type, Accept"
	)
	next()
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get("env") === "development" ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.json({ error: err })
})

module.exports = app
