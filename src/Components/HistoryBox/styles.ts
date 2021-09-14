import styled from "styled-components";

export const Conteiner = styled.article `
    width: 100%;
    background-color: ${(props)=>props.theme.colors.tertiary};
    color: ${(props)=>props.theme.colors.white};
    margin: 10px 0;
    padding: 30px 20px;
    border-radius: 7px;

`

export const Header = styled.header `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 0px 19px;
`

export const ChartConteiner = styled.div ` 
    height:320px ;

`