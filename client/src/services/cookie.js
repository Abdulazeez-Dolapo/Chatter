import axiosInstance from "./axios"

export const checkCookie = async () => {
	return await axiosInstance.get("/auth/cookie-status")
}
