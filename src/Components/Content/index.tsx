import React from 'react'
import { Conteiner } from './styles'

const Content: React.FC = props => {

    return (
        <Conteiner>
            <main>
                { props.children }
            </main>
        </Conteiner>
    )
}

export default Content