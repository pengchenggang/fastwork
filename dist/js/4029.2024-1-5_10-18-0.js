"use strict";(self["webpackChunkfastwork"]=self["webpackChunkfastwork"]||[]).push([[4029],{44029:function(r,n,e){e.r(n),n["default"]="import axios from 'axios'\r\nimport qs from 'qs'\r\nconst dev = 'http://192.168.40.54:8888/fastwork-api/'\r\nconst pro = window.location.protocol + '//' + window.location.host + '/fastwork-api/'\r\nconst baseURL = process.env.NODE_ENV === 'development' ? dev : pro\r\nconst instance = axios.create({\r\n  baseURL\r\n})\r\n\r\n// 请求拦截\r\ninstance.interceptors.request.use(config => {\r\n  console.log('config', config)\r\n  return config\r\n}, error => {\r\n  return Promise.reject(error)\r\n})\r\n\r\n// 响应拦截\r\ninstance.interceptors.response.use(res => {\r\n  let { data, status } = res\r\n  if (data.status === 302) {\r\n    if (data.data) {\r\n      window.location.href = data.data\r\n      return Promise.reject(new Error('302跳转'))\r\n    }\r\n  }\r\n  return { data, status }\r\n}, error => {\r\n  return Promise.reject(error)\r\n})\r\n\r\nexport const api = (url, data, config = {}) => {\r\n  // 返回ajax方法\r\n  const method = 'post'\r\n  let formatedData = { ...data }\r\n  formatedData = qs.stringify(formatedData, {\r\n    arrayFormat: 'repeat'\r\n  })\r\n  let responseType = 'json'\r\n  return instance.request({\r\n    url,\r\n    baseURL: 'http://127.0.0.1:8012/fastwork-api/',\r\n    data: formatedData,\r\n    headers: {},\r\n    withCredentials: true, // 后台 同时配置'Access-Control-Allow-Origin': '指定IP:端口' 不能是*\r\n    // withCredentials: false, // 后台 同时配置'Access-Control-Allow-Origin': '指定IP:端口' 不能是*\r\n    method: method,\r\n    responseType: responseType\r\n  }).then(res => {\r\n    // console.info('res.data', url, res.data)\r\n    return res.data\r\n  })\r\n}\r\n"}}]);