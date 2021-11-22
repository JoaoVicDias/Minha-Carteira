import React from 'react'
import { CSSTransition } from 'react-transition-group'

import { BackdropStyles } from './styles'

interface IBackdropProps {
    isOpen: boolean;
    onClose: () => void;
    top?: number;
}

const Backdrop:React.FC <IBackdropProps>= ({ isOpen, onClose, top }) => {

    return (
        <CSSTransition
                in={isOpen}
                timeout={200}
                classNames="slide-in-left"
                mountOnEnter
                unmountOnExit>
            <BackdropStyles top={top} onClick={onClose}>

            </BackdropStyles>
        </CSSTransition>
    )
} 

export default Backdrop