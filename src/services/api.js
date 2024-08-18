import axios from "axios"

const baseURL = "https://api.bitpin.org/"

const request = axios.create({
  baseURL,
  timeout: 50000
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      return Promise.reject(error)
    }
  }
)

export default request
