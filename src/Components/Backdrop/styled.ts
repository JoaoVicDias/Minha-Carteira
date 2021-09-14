import styled from 'styled-components'

interface IConteinerProps {
    show:boolean;
}

export const Conteiner = styled.div<IConteinerProps>`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
    transition: all 0.4s ease-in-out;
    transform: ${(props)=>props.show ? 'translateY(0)' : 'translateY(-100%)'};
    cursor: pointer;
    z-index: 1;
`