import React from 'react'
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md'

import Backdrop from '../Backdrop'

import LogoSVG from '../../Assets/logo.svg'

import useUser from '../../Hooks/UserContext'

import { Conteiner, Title, LogoImg, CompanyName, MenuContainer, MenuItemLink, AsideButton } from './styles'


interface IAsideProps {
    isOpen: boolean;
    onClose: () => void;
}

const Aside: React.FC<IAsideProps> = ({ isOpen, onClose }) => {

    const { LogoffFunction } = useUser()

    return (
        <>
            <Backdrop isOpen={isOpen} onClose={onClose} top={70} />
                <Conteiner isOpen={isOpen} >
                    <Title>
                        <LogoImg src={LogoSVG} alt="Logo Minha Carteira" />
                        <CompanyName>Minha Carteira</CompanyName>
                    </Title>

                    <MenuContainer>
                        <MenuItemLink to="/" onClick={() => onClose()}> <MdDashboard /> DashBoard </MenuItemLink>
                        <MenuItemLink to="/list/gains" onClick={() => onClose()}> <MdArrowUpward /> Entradas </MenuItemLink>
                        <MenuItemLink to="/list/expenses" onClick={() => onClose()}> <MdArrowDownward /> Saídas </MenuItemLink>
                        <AsideButton onClick={() => {LogoffFunction('Desconectado com sucesso!'); onClose()}}> <MdExitToApp /> <span>Sair</span> </AsideButton>
                    </MenuContainer>
                </Conteiner>
        </>
    )
}

export default Aside