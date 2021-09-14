import styled from "styled-components";


export const Conteiner = styled.article `
    width: 48%;
    height: 260px;
    margin: 10px 0;
    background-color: ${props=>props.theme.colors.tertiary};
    color: ${props=>props.theme.colors.white};
    border-radius: 7px;
    display: flex;
`

export const SideLeft = styled.aside `
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h2 {
        margin-bottom: 20px;
    }
`
export const LegendConteiner = styled.ul `
    list-style: none;
    overflow-y: auto;
    margin-top: 20px;
    padding: 6px 12px;

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

export const SideRigth = styled.main `
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`