import axios from 'axios'

// axios.defaults.transformRequest = axios.defaults.transformRequest

// const baseUrl = "http://localhost:8080/"
const baseUrl = "https://my-wallet-api-joao.herokuapp.com/"

export default axios.create({
    baseURL:baseUrl,
    headers:{
        'Content-Type':'application/json; charset=utf-8'
    },
    transformRequest: [
        (data, headers) => {
          const token = localStorage.getItem("userToken");
          if (token) {
            headers.common.Authorization = `Bearer ${token}`;
          } else {
            console.log("Cade o KCT do login");
          }
          return JSON.stringify(data);
        }
    ],
})
