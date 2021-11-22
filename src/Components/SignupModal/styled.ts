import styled from "styled-components";

interface IFormProps {
    show:boolean;
}

export const Form = styled.form<IFormProps>`
    width: 320px;
    transition: all 0.4s ease-in-out;
    transform: ${(props)=>props.show ? 'translateX(0)' : 'translateX(-200%)'};
    background-color: ${(props)=>props.theme.colors.tertiary};
    padding:40px 20px;
    border-radius: 4px;

    @media(max-width:767px) {
        width: 75%;
    }

    .close__button {
        position: absolute;
        top: 8px;
        right: 8px;
        color: ${props=>props.theme.colors.white};
        cursor: pointer;
        font-size: 1.1rem;

        :active,
        :hover {
            opacity: .9;
        }
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