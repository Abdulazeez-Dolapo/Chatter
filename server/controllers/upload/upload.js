const AWS = require("aws-sdk")
const createError = require("http-errors")

const s3bucket = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: process.env.AWS_REGION,
})

const uploadFile = file => {
	return new Promise(async (resolve, reject) => {
		const fileUploadParams = {
			Bucket: process.env.AWS_BUCKET_NAME,
			Key: file.originalname,
			Body: file.buffer,
			ContentType: file.mimetype,
			ACL: "public-read",
		}

		await s3bucket.upload(fileUploadParams, (err, data) => {
			if (err) {
				reject(err)
			}

			resolve(data)
		})
	})
}

const validateRequestBody = body => {
	return !body || body.length === 0
}

const uploadFiles = async (req, res, next) => {
	try {
		const errors = ["Please send at least one image"]
		const files = req.files

		// validate request body
		const isRequestBodyValid = validateRequestBody(files)
		if (isRequestBodyValid) {
			return next(createError(400, { errors }))
		}

		const uploadFilePromises = []

		files.forEach(file => {
			uploadFilePromises.push(uploadFile(file))
		})

		const uploadedFiles = await Promise.all(uploadFilePromises)

		return res.json({
			success: true,
			files: uploadedFiles,
		})
	} catch (error) {
		console.log(error)
		return next(createError(500))
	}
}

const deleteFile = (req, res, next) => {
	try {
		const fileName = req.params.name

		let fileDeleteParams = {
			Bucket: process.env.AWS_BUCKET_NAME,
			Key: fileName,
		}

		s3bucket.deleteObject(fileDeleteParams, (err, data) => {
			if (err) {
				return res.status(500).json({ error: true, message: error })
			} else {
				res.json({
					message: "File was deleted successfully",
				})
			}
		})
	} catch (error) {
		console.log(error)
		return next(createError(500))
	}
}

module.exports = {
	uploadFiles,
	deleteFile,
}
