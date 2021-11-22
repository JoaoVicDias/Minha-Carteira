import React from 'react'
import { Conteiner, Tag, TitleContainer, ButtonsContainer } from './styles'

interface IHistoryFinanceCardProps {
    title: string;
    subTitle: string;
    amount: string;
    onDelete: (cardId: any) => void;
    onEdit: (cardId: any) => void;
    frequency:string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = props => {
    const { title, subTitle, amount, frequency, onDelete, onEdit } = props;

    return (
        <Conteiner>
            <Tag frequency={frequency} />
            <TitleContainer>
                <span> {title} </span>
                <small> {subTitle} </small>
            </TitleContainer>
            <h3> {amount} </h3>
            <ButtonsContainer>
                <button className="btn__edit--history-card" onClick={onEdit}> Editar </button>
                <button className="btn__delete--history-card" onClick={onDelete}> Excluir </button>
            </ButtonsContainer>
        </Conteiner>
    )
}

export default HistoryFinanceCard