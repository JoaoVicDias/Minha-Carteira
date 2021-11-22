import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface IContainer {
    isOpen: boolean;
}

export const Conteiner = styled.aside<IContainer>`
    grid-area: AS ;
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid ${props => props.theme.colors.gray};

    @media(max-width:1024px) {
        position: fixed;
        top: 70px;
        left: 0;
        height: 100%;
        width: 250px;
        z-index: 99;
        transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
        transition: all 200ms ;
    }

    @media(max-width:420px) {
        width: 70%;
    }
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

export const AsideButton = styled.button`
    text-decoration: none ;
    font-size: 1rem;
    background-color: transparent;
    color: ${props => props.theme.colors.info};
    transition: opacity .3s ease-in-out;
    margin: 7px 0;
    display: flex;
    align-items: center; 
    padding: 0;

    &:hover{
        opacity: .7;
    }

    > svg {
        font-size: 1.2rem;
        margin-right: 5px;
    }`