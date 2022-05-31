import axios from 'axios'

const service = axios.create({
    baseURL: 'https://www.fastmock.site/mock/e81efc0d06a1c66b2433a1f8e03f82fd/api',
    timeout: 10000
})

service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log('request error', error)
    }
)

service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        console.log('response error', error)
    }
)

const axiosService = (method = 'get', url, params = {}, body = {}, ...other) => {
    return service({
        url,
        method,
        params,
        body,
        ...other
    })
}

export default axiosService
