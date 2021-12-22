import axios from 'axios'
import { Toast } from 'vant'

// request timeout
const timeout = 50 * 1000
// api的base_url
const baseURL = process.env.VUE_APP_BASE_API

// create an axios instance
const http = axios.create({
  baseURL,
  timeout
})

http.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(`err,${error}`)
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.status !== 1) {
      Toast(`status:${res.status},${res.msg}`)
      return Promise.reject(res.msg)
    } else {
      return response.data
    }
  },
  (error) => {
    console.log(`err,${error}`)
    Toast(`err,${error}`)
    return Promise.reject(error)
  }
)

export default http
