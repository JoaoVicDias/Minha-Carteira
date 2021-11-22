import React, { useCallback, useState } from 'react'
import { GridLayout } from './styles'
import MainHeader from '../MainHeader'
import Aside from '../Aside'
import Content from '../Content'


const BasePage: React.FC = ({ children }) => {

    const [openAsideResponsive, setOpenAsideResponsive] = useState(false)

    const onCloseAsideHandler = useCallback(() => (
        setOpenAsideResponsive(false)
    ),[])

    const onAsideHandler = useCallback(() => (
        setOpenAsideResponsive(prevState => !prevState)
    ),[])


    return (
        <GridLayout>
            <MainHeader onAsideHandler={onAsideHandler} />
            <Aside isOpen={openAsideResponsive} onClose={onCloseAsideHandler} /> 
            <Content>
                { children }
            </Content>
        </GridLayout>
    )
}

export default BasePage