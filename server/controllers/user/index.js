const createError = require("http-errors")

const { searchUser, findAllUsers } = require("../../queries/user")


const searchForUser = async (req, res, next) => {
	try {
		const { username } = req.query
      let users

      if(!username) {
         users = await findAllUsers()
      } else {
         users = await searchUser(username)
      }

		return res.status(200).json({
			users
		})
	} catch (error) {
		return next(createError(500))
	}
}


module.exports = { searchForUser }
