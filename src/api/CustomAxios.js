import axios from "axios"

const BASE_URL = "http://localhost:8200/api"

export const CustomAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
})