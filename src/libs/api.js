import axios from 'axios'
import qs from 'qs'
const dev = 'http://192.168.40.54:8888/fastwork-api/'
const pro = window.location.protocol + '//' + window.location.host + '/fastwork-api/'
const baseURL = process.env.NODE_ENV === 'development' ? dev : pro
const instance = axios.create({
  baseURL
})

// 请求拦截
instance.interceptors.request.use(config => {
  console.log('config', config)
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(res => {
  let { data, status } = res
  if (data.status === 302) {
    if (data.data) {
      window.location.href = data.data
      return Promise.reject(new Error('302跳转'))
    }
  }
  return { data, status }
}, error => {
  return Promise.reject(error)
})

export const api = (url, data, config = {}) => {
  // 返回ajax方法
  const method = 'post'
  let formatedData = { ...data }
  formatedData = qs.stringify(formatedData, {
    arrayFormat: 'repeat'
  })
  let responseType = 'json'
  return instance.request({
    url,
    baseURL: 'http://127.0.0.1:8012/fastwork-api/',
    data: formatedData,
    headers: {},
    // withCredentials: true, // 后台 同时配置'Access-Control-Allow-Origin': '指定IP:端口' 不能是*
    withCredentials: false, // 后台 同时配置'Access-Control-Allow-Origin': '指定IP:端口' 不能是*
    method: method,
    responseType: responseType
  }).then(res => {
    // console.info('res.data', url, res.data)
    return res.data
  })
}
