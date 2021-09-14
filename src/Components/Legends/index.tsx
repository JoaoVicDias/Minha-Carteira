import React from 'react'
import { Conteiner, Legenditems, Box } from './styles'


interface ILegendsProps {
    data:{
        color:string;
        boxText:string;
        labelText:string
    }[];
    direction: string;
}

const Legends: React.FC<ILegendsProps> = ({ direction,data }) => {

    return (
        <Conteiner direction={direction} >
            {
                data.map(item=>(
                    <Legenditems direction={direction}>
                        <Box color={item.color} >{item.boxText}</Box>
                        <span> {item.labelText} </span>
                    </Legenditems>
                ))
            }
        </Conteiner>
    )
}

export default Legends