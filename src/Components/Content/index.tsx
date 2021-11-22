import React from 'react'

import { Conteiner } from './styles'

const Content: React.FC = ({ children }) => {

    return (
        <Conteiner>
            {
                children
            }
        </Conteiner>
    )
}

export default Content