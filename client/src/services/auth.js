import axiosInstance from "./axios"

export const checkCookie = async () => {
	return await axiosInstance.get("/auth/cookie-status")
}

export const loginUser = async formData => {
	return await axiosInstance.post("/auth/login", formData)
}

export const signupUser = async formData => {
	return await axiosInstance.post("/auth/register", formData)
}

export const logout = async () => {
	return await axiosInstance.get("/auth/logout")
}
