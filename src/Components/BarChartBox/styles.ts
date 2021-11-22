import styled from 'styled-components'

export const Conteiner = styled.article`
    padding: 10px 25px;
    display: flex;
    width: 48%;
    min-height: 260px;
    margin: 10px 0;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};    
    border-radius: 7px;
    
    @media(max-width:767px) {
        width: 100%;
    }
`

export const LeftSide = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    flex-direction: column;

`

export const RightSide = styled.div`
   flex: 1;
   min-height: 130px;
   display: flex;
   justify-content: center;
   width: 50%;

`