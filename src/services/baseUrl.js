import axios from 'axios';

export const BASE_URL = "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb";

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json"
    }
})