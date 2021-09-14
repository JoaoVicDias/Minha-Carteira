import React from 'react'
import { GridLayout } from './styles'
import MainHeader from '../MainHeader'
import Aside from '../Aside'
import Content from '../Content'


const BasePage: React.FC = props => {

    return (
        <GridLayout>
            <MainHeader />
            <Aside />
            <Content>
                { props.children }
            </Content>
        </GridLayout>
    )
}

export default BasePage