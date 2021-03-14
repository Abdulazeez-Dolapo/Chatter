const createError = require("http-errors")

const { searchUser, findAllUsers } = require("../../queries/user")


const searchForUser = async (req, res, next) => {
	try {
		const searchParams = req.body.searchParams
      let users

      if(!searchParams) {
         users = await findAllUsers()
      } else {
         users = await searchUser(searchParams)
      }

		return res.status(200).json({
			users
		})
	} catch (error) {
		return next(createError(500))
	}
}


module.exports = { searchForUser }
