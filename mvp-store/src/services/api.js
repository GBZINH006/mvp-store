import axios from "axios"

export const api = axios.create({
    baseURL: "htpps://fakestoreapi.com/"
});