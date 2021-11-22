import React, { useCallback } from 'react'

import { Backdrop } from './styles'

interface IModal {
    isOpen: boolean
    onClose:(state:boolean)=>void
}

const Modal: React.FC<IModal> = ({ isOpen, onClose, children }) => {

    const onCloseHandler = useCallback((e) => {
        if (e.target.id === 'backdrop') {
            onClose(false)
        }
        return
    },[onClose])

    return (
        <Backdrop isOpen={isOpen} id="backdrop" onClick={(e)=>onCloseHandler(e)}>
            {
                children
            }
        </Backdrop>
    )
}


export default Modal