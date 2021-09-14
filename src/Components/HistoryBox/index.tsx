import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts'
import { Conteiner, ChartConteiner, Header, } from './styles'

import Legends from '../Legends'

import formatCurrency from '../../utils/formatCurrency'


interface IHistoyBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[];
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoyBoxProps> = ({ data, lineColorAmountEntry, lineColorAmountOutput }) => {

    const legendsObjct = [
        {
            color:"#f7931b",
            labelText:"Entradas",
            boxText:""
        },
        {
            color:"#e44c4e",
            labelText:"Saídas",
            boxText:""
        }
    ]

    return (
        <Conteiner>
            <Header>
                <h2>Histórico de saldo</h2>
                <Legends direction="row" data={legendsObjct}/>
            </Header>
            <ChartConteiner>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                        <XAxis dataKey="month" stroke="#cecece" />
                        <Tooltip  formatter={(value: any) => formatCurrency(Number(value))}/>
                        <Line type="monotone" dataKey="amountEntry" name="Entradas" stroke={lineColorAmountEntry} strokeWidth={5} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="amountOutput" name="Saídas" stroke={lineColorAmountOutput} strokeWidth={5} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </ChartConteiner>
        </Conteiner>
    )
}


export default HistoryBox