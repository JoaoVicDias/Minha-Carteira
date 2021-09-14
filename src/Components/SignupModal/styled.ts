import styled from "styled-components";

interface IFormProps {
    show:boolean;
}

export const Form = styled.form<IFormProps>`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 320px;
    max-height: 400px;
    transition: all 0.4s ease-in-out;
    transform: ${(props)=>props.show ? 'translateX(0)' : 'translateX(-100vw)'};
    background-color: ${(props)=>props.theme.colors.tertiary};
    padding:40px 20px;
    border-radius: 4px;
    z-index: 2;
`

export const CloseButton = styled.span `
    position: absolute;
    top: 8px;
    right: 8px;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;

    :active,
    :hover {
        opacity: .9;
    }
`

export const FormTitle  = styled.h1`
    color: ${(props)=>props.theme.colors.white};
    font-size: 1.9rem;

    ::after {
        content: "";
        display: block;
        width: 50px;
        border-bottom: 10px solid  ${(props)=>props.theme.colors.warning};
    }
`


export const InputsConteiner = styled.div`
    margin: 30px 0;
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`