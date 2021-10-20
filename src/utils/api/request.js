import axios from 'axios'
const request = axios.create({
  baseURL: 'http://39.105.118.190:8080',
})

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    const user = JSON.parse(window.localStorage.getItem('user'))
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    return config
  }
)

export default request
