const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000

const ONE_DAY_IN_SECONDS = 24 * 60 * 60

const cookieOptions = {
	httpOnly: true,
	secure: process.env.NODE_ENV === "production",
	expire: ONE_DAY_IN_MILLISECONDS,
}

module.exports = {
	ONE_DAY_IN_MILLISECONDS,
	ONE_DAY_IN_SECONDS,
	cookieOptions,
}
