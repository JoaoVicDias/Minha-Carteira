import React from 'react'
import LogoSVG from '../../Assets/logo.svg'
import { Conteiner, Title, LogoImg, CompanyName, MenuContainer, MenuItemLink } from './styles'
import { MdDashboard,MdArrowDownward,MdArrowUpward,MdExitToApp } from 'react-icons/md'

const Aside: React.FC = () => {

    return (
        <Conteiner>
            <Title>
                <LogoImg src={LogoSVG} alt="Logo Minha Carteira" />  
                <CompanyName>Minha Carteira</CompanyName>
            </Title>

            <MenuContainer>
                <MenuItemLink to="/"> <MdDashboard/> DashBoard </MenuItemLink>
                <MenuItemLink to="/list/entry-balance"> <MdArrowUpward/> Entradas </MenuItemLink>
                <MenuItemLink to="/list/exit-balance"> <MdArrowDownward/> Saídas </MenuItemLink>
                <MenuItemLink to="/"> <MdExitToApp/> Sair </MenuItemLink>
            </MenuContainer>
        </Conteiner>
    )
}

export default Aside