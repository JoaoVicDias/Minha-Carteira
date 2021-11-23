import styled from 'styled-components'

export const Conteiner = styled.main`
    grid-area: CT;
    background-color: ${props => props.theme.colors.primary};
    padding: 25px;
    height: calc(100vh - 70px);
    overflow-y: scroll;

    @media(max-width:620px) {
        padding: 10px;
    }

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