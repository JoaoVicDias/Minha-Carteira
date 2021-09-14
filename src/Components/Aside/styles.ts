import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Conteiner = styled.aside`
    grid-area: AS ;
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid ${props => props.theme.colors.gray};
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
`

export const LogoImg = styled.img`
    height: 40px;
    width: 40px;
`

export const CompanyName = styled.h3` 
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`


export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`

export const MenuItemLink = styled(Link)` 
    text-decoration: none ;
    color: ${props => props.theme.colors.info};
    transition: opacity .3s ease-in-out;
    margin: 7px 0;
    display: flex;
    align-items: center; 

    &:hover{
        opacity: .7;
    }

    > svg {
        font-size: 1.2rem;
        margin-right: 5px;
    }
`