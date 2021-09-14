import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import Legends from '../Legends'

import { Conteiner, SideLeft, SideRigth } from './styles'


interface IPieChartComponentProps {
    data: {
        value: number;
        name:string;
        percent:number;
        color:string;
    }[],
    dataLegend: {
        color: string;
        boxText: string;
        labelText: string
    }[]
}


const PieChartComponent: React.FC<IPieChartComponentProps> = ({ data, dataLegend }) => (
    <Conteiner>
        <SideLeft>
            <h2>Relação</h2>
            <Legends direction="column" data={dataLegend} />
        </SideLeft>
        <SideRigth>
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} labelLine={false} dataKey="percent">
                        {
                            data.map(item => (
                                <Cell key={item.name} fill={item.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRigth>
    </Conteiner>
)


export default PieChartComponent