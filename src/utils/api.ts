import axios from "axios"

const api = axios.create({
  baseURL: "https://candle-posts-server.herokuapp.com/",
})

export default api
