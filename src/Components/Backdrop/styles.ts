import styled from "styled-components";

interface IBackdrop {
    top?: number;
}

export const BackdropStyles = styled.div<IBackdrop> `
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: ${props => props.top || 0}px;
    left: 0;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
`