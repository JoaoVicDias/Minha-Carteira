import styled from "styled-components";

interface IBackdrop {
    isOpen:boolean;
}

export const Backdrop = styled.div<IBackdrop> `
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease-in-out;
    transform: ${props=>props.isOpen ? 'translateX(0)' : 'translateX(-200%)'};
    z-index: 100;
`
