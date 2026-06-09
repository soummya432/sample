import axios from "axios";
const base_address = "https://api.todoapp.com/"
const api = axios.create({
    baseURL: base_address,
    header: {
        'Content-Type': 'application/json',
    },
})
export default api;