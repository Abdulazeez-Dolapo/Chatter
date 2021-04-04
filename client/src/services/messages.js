import axiosInstance from "./axios"

export const fetchUserChatList = async () => {
	return await axiosInstance.get("/conversations")
}
