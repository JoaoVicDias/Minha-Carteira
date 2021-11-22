import React, { useMemo } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

import emojis from '../../utils/emojis'

import useTheme from '../../Hooks/ThemeContext'
import useUser from '../../Hooks/UserContext'

import Toggle from '../Toggle'

import {
    Header,
    Profile,
    Welcome,
    UserName,
    LeftItems
} from './styles'

interface IMainHeaderProps {
    onAsideHandler: () => void;
}

const MainHeader: React.FC <IMainHeaderProps>= ({ onAsideHandler }) => {
    const { onChange, theme } = useTheme()
    const { user } = useUser()

    const checkedHandler = useMemo(() => {
        if (theme.title === 'dark') {
            return true
        } else {
            return false
        }
    }, [theme])

    const Emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length)
        return emojis[indice]
    }, [])

    return (
        <Header>
            <LeftItems>
                <GiHamburgerMenu className='btn__hamburger--menu' onClick={onAsideHandler} />
                <Toggle
                    changeFunction={onChange}
                    checked={checkedHandler}
                />
            </LeftItems>

            <Profile>
                <Welcome>Olá, {Emoji}</Welcome>
                <UserName> {user.name} </UserName>
            </Profile>
        </Header>
    )
}

export default MainHeader