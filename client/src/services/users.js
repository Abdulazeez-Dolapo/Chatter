import axiosInstance from "./axios"

export const fetchUsers = async username => {
	return await axiosInstance.get(`/users/search?username=${username}`)
}
