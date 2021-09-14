import React from 'react'
import { Conteiner, Tag } from './styles'

interface IHistoryFinanceCardProps {
    tagColor: string;
    title: string;
    subTitle: string;
    amount: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = props => {
    const { tagColor, title, subTitle, amount } = props;

    return (
        <Conteiner>
            <Tag color={tagColor} />
            <div>
                <span> {title} </span>
                <small> {subTitle} </small>
            </div>
            <h3> {amount} </h3>
        </Conteiner>
    )
}

export default HistoryFinanceCard