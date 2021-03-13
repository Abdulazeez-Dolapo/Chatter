import axiosInstance from "./axios"

export const signupUser = async formData => {
	return await axiosInstance.post("/auth/register", formData)
}
