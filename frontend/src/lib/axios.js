import axios from "axios";


const axiosInstance = axios.create({
	baseURL:  "https://poultry-e-commerce.onrender.com/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
