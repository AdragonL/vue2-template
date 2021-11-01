import axios from "axios"
export function request(config) {
    return new Promise((resolve, reject) => {
        //创建axios实例
        const instance = axios.create({
            baseURL : process.env.VUE_APP_BASE_API,
            // baseURL: "https://xy-website-api-test.xinyuanact.com",
            // baseURL: '/ccc',
            timeout: 5000
        })
        //发送真正的网络请求
        instance(config)
            .then(res => {
                // console.log(res) //要回调出去
                resolve(res) //回调
            })
            .catch(err => {
                // console.log(err) //要回调出去
                reject(err) //回调
            })
    })
}