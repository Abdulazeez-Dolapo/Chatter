import axios from "axios"

const defaultOptions = {
	baseURL: "/api",
	withCredentials: true,
}

const axiosInstance = axios.create(defaultOptions)

axiosInstance.interceptors.response.use(
	res => res.data,
	err => {
		throw err.response.data.error
	}
)

export default axiosInstance
