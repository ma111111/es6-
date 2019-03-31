var axios = require('axios')

var service = axios.create({
    baseURL: 'http://lovegf.cn:8899',
    timeout: '6000',
    headers: {"Content-Type": "application/x-www-form-urlencoded"}
})

// service.interceptors.request.use(config => {
//     loading.show()
//     return config
// })
// service.interceptors.response.use(res => {
//     loading.hide()
//     return res
// })

console.dir(service);