import React from 'react'

import { Conteiner } from './styled'


interface IBackdropProps {
    show:boolean;
    setShow(status:boolean):void;
}

const Backdrop:React.FC<IBackdropProps> = ({ show, setShow })=>{
    return(
        <Conteiner show={show} onClick={()=>setShow(false)}></Conteiner>
    )
}




export default Backdrop