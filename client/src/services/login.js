import axiosInstance from "./axios"

export const loginUser = async formData => {
	return await axiosInstance.post("/auth/login", formData)
}
