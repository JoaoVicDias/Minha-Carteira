import React, { useMemo } from 'react'
import { Conteiner } from './styles'
import CountUp from 'react-countup'

import DolarImg from '../../Assets/dollar.svg'
import ArrowDowImg from '../../Assets/arrow-down.svg'
import ArrowUpImg from '../../Assets/arrow-up.svg'

interface IWalletBox {
    title:string;
    amount:number;
    footerLabel:string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color:string;
}

const WalletBox:React.FC<IWalletBox> = ({ title, amount, footerLabel, icon, color })=>{

    const selectedIcon = useMemo(()=>{
        switch (icon) {
            case "dolar":
                return DolarImg
            case "arrowUp":
                return ArrowUpImg
            case "arrowDown":
                return ArrowDowImg
            default:
               return null
        }
    },[icon])

    return (
        <Conteiner color={color}>
            <span>{title}</span>
            <h1>
                <CountUp prefix={"R$ "} separator="." decimal="," decimals={2} end={amount} duration={1.6}/>
            </h1>
            <small>{footerLabel}</small>
           {selectedIcon && <img src={selectedIcon} alt={title}/>}
        </Conteiner>
    )
}

export default WalletBox