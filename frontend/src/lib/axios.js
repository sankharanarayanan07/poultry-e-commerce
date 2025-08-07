import axios from "axios";

const axiosInstance = axios.create({
<<<<<<< HEAD
	baseURL: import.meta.mode === "development" ? "https://poultry-e-commerce.onrender.com/api/" : "/api",
=======
	baseURL: import.meta.mode === "development" ? "https://poultry-e-commerce-backend.onrender.com/" : "/api",
>>>>>>> a2f92e8 (update)
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
