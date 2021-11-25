import axios from 'axios'

// const baseUrl = "http://localhost:8080/"
const baseUrl = "https://my-wallet-api-joao.herokuapp.com/"

export default axios.create({
    baseURL:baseUrl
})
