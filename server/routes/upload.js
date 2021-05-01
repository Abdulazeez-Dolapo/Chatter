const express = require("express")
const multer = require("multer")

const { uploadFiles, deleteFile } = require("../controllers/upload/upload")
const { authenticate } = require("../middlewares/auth")

const storage = multer.memoryStorage()
const upload = multer({ storage })
const uploadRouter = express.Router()

uploadRouter.post(
	"/upload-files",
	authenticate,
	upload.array("file", 4),
	uploadFiles
)

uploadRouter.delete("/delete-file/:name", authenticate, deleteFile)

module.exports = uploadRouter
