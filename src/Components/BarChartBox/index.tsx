import React from 'react'
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import Legends from '../Legends'


import { Conteiner, LeftSide, RightSide } from './styles'

interface IBarChartProps {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string
    }[],
    legendData: {
        color: string;
        boxText: string;
        labelText: string
    }[]
}


const BarChartBox: React.FC<IBarChartProps> = ({ title, data, legendData }) => {

    return (
        <Conteiner>
            <LeftSide>
                <h2> {title} </h2>
                <Legends direction="column" data={legendData} />
            </LeftSide>
            <RightSide>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey="amount" name="Valor">
                            {
                                data.map((indicator) => (
                                    <Cell
                                        key={indicator.name}
                                        fill={indicator.color}
                                        cursor="pointer"
                                    />
                                ))
                            }
                        </Bar>
                        <Tooltip
                            cursor={{ fill: 'none' }}
                            formatter={(value: any) => formatCurrency(Number(value))}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </RightSide>

        </Conteiner>
    )
}

export default BarChartBox