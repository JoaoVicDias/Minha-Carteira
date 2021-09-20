import MinhaCarteiraAxios from './MinhaCarteiraAxios'

interface IData {
    email:string;
    password:string;
}

const LoginFunction = async (data:IData) => {
    return await MinhaCarteiraAxios.post('auth/signin', data)
}


export {
    LoginFunction
}