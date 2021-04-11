import axiosInstance from "./axios"

export const fetchUserChatList = async () => {
	return await axiosInstance.get("/conversations")
}

export const createConversation = async participants => {
	return await axiosInstance.post("/conversation", participants)
}
