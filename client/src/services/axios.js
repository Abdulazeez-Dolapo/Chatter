import axios from "axios"

const defaultOptions = {
	baseURL: "/api",
	withCredentials: true,
}

const axiosInstance = axios.create(defaultOptions)

// Intercept response and send just the response data and error arrays
axiosInstance.interceptors.response.use(
	res => res.data,
	err => err.response.data.error
)

export default axiosInstance
