import axios from "axios"

const defaultOptions = {
	baseURL: "/api",
	withCredentials: true,
}

const axiosInstance = axios.create(defaultOptions)

axiosInstance.interceptors.response.use(res => res.data)

export default axiosInstance
