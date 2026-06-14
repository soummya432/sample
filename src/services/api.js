import axios from "axios";
const base_address = "http://localhost:3000/api"
const api = axios.create({
    baseURL: base_address,
    header: {
        'Content-Type': 'application/json',
    },
})
export default api