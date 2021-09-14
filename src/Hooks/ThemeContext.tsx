import React, { useCallback, useContext, useState, useEffect } from 'react'

import dark from '../Styles/Themes/dark'
import light from '../Styles/Themes/light'


interface IThemeContext {
    onChange(): void;
    theme: ITheme;
}

interface ITheme {
    title: string;
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        gray: string;

        success: string;
        info: string;
        warning: string;
    }
}

const ThemeContext = React.createContext({} as IThemeContext)



const ThemeContextProvider:React.FC = ({ children }) => {
    const [theme,setTheme] = useState<ITheme>(dark)

    const onChangeThemeHandler = useCallback(()=>{
        if(theme?.title === 'dark'){
            setTheme(light)
            localStorage.setItem('theme','light')
        }else{
            setTheme(dark)
            localStorage.setItem('theme','dark')

        }
    },[theme])

    useEffect(()=>{
        const storedTheme = localStorage.getItem('theme')
        if(storedTheme){
            if(storedTheme === 'dark'){
                setTheme(dark)
            }else{
                setTheme(light)
            }
        }
        
    },[])

    return (
        <ThemeContext.Provider value={{theme:theme,onChange:onChangeThemeHandler}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = ():IThemeContext => {
    return useContext(ThemeContext)
}

export default useTheme

export { ThemeContextProvider}