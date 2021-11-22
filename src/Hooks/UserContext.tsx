import React, { useContext, useState, useCallback, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify'


interface IUserContext {
    user: IUserData,
    logged: boolean;
    setLogged: (type: boolean) => void,
    LogoffFunction: (text: string) => void
}


interface IUserData {
    name: string;
    email: string;
    iat: number;
    exp: number;
}



const UserContext = React.createContext({} as IUserContext)


const UserContextProvider: React.FC = ({ children }) => {
    const storedToken = localStorage.getItem('userToken') || ''
    const [logged, setLogged] = useState<boolean>(storedToken ? true : false)
    const [user, setUser] = useState<IUserData | any>({})

    const LogoffFunction = useCallback(async (text) => {
        localStorage.removeItem('userToken')
        setLogged(false)
        setUser({})
        toast.success(text)
    }, [])

    const checkExpiry = useCallback(async () => {
        const currentDate = new Date().getTime() / 1000
        if (currentDate > user.exp) {
            LogoffFunction('Sua sessão expirou, precisa fazer o login!')
        }

    }, [user, LogoffFunction])

    useEffect(() => {
        if (storedToken) {
            setUser(
                jwt_decode(storedToken)
            )
        }
    }, [storedToken])

    useEffect(() => {
        if (logged) {
            checkExpiry();
            const interval = setInterval(checkExpiry, 10000);
            return () => { clearInterval(interval); };
        }
    }, [LogoffFunction, logged, checkExpiry]);

    return (
        <UserContext.Provider value={{ logged, setLogged, LogoffFunction, user }}>
            {children}
        </UserContext.Provider>
    )
}


const useUser = (): IUserContext => {
    return useContext(UserContext)
}


export default useUser

export { UserContextProvider }