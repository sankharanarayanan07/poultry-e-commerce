import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://poultry-e-commerce.onrender.com/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
