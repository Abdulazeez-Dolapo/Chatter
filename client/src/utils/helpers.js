export const formatDate = date => {
	if (!date) return

	return new Date(date)?.toString()?.split(" ")[4]?.slice(0, 5)
}
