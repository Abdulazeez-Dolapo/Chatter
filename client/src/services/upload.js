import axiosInstance from "./axios"

export const uploadImage = async image => {
	return await axiosInstance.post("/upload-files", image)
}
