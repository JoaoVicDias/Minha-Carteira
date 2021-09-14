import styled from "styled-components";

interface IConteinerProps {
    direction: string;
}

interface ILegendItems {
    direction: string;
}

interface IBoxProps {
    color: string;
}

export const Conteiner = styled.ul <IConteinerProps> `
    list-style: none;
    overflow-y: auto;
    padding: 6px 12px;
    display: flex;
    flex-direction: ${(props) => props.direction};
    margin: 0;

    ::-webkit-scrollbar{
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${props=>props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track{
        background-color: ${props=>props.theme.colors.tertiary};
    }
`

export const Legenditems = styled.li<ILegendItems>`
    display: flex;
    align-items: center;
    margin: ${(props)=>props.direction === "column" ? "20px 0 0 0" : "0 0 0 20px"};
    > span {
        margin-left: 5px;
    }
`

export const Box = styled.div<IBoxProps> `
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.color};
        padding: 5px;
        min-width: 40px;
        min-height: 40px;
        border-radius: 3px;
        font-size: 1rem;
`