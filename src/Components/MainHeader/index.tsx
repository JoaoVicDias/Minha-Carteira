import React,{ useMemo } from 'react'

import emojis from '../../utils/emojis'

import useTheme from '../../Hooks/ThemeContext' 

import Toggle from '../Toggle'

import { 
    Header,
    Profile,
    Welcome,
    UserName
    } from './styles'

const MainHeader: React.FC = () => {
    const { onChange,theme } = useTheme()


    const checkedHandler = useMemo(()=>{
        if(theme.title === 'dark'){
            return true
        }else{
            return false
        }
    },[theme])


    const Emoji = useMemo(()=>{
        const indice = Math.floor(Math.random() * emojis.length )
        return emojis[indice]
    },[])

    return (
        <Header>
            <Toggle
                changeFunction={onChange}
                checked={checkedHandler}
            />
            
            <Profile>
                <Welcome>Olá, {Emoji}</Welcome>
                <UserName>João Victor</UserName>
            </Profile>
        </Header>
    )
}

export default MainHeader