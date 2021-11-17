import axios from 'axios'

export function request(config) {
    const instance = axios.create({
            baseURL: "http://localhost:3000"
        })
        // 设置拦截器，登录时需要发送请求头来验证是否登录成功
    instance.interceptors.request.use(config => {
            return config
        })
        // 设置响应拦截器，服务器响应钱做出其他功能
    instance.interceptors.response.use(res => {
        return res.data
    })
    return instance(config)
}