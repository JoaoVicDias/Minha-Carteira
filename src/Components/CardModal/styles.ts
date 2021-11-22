import styled from "styled-components";

interface IContainer {
    isOpen: boolean;
}


export const Container = styled.div <IContainer>`
    background-color: ${(props) => props.theme.colors.primary};
    width: 700px;
    border-radius: 8px;
    box-shadow: 5px 7px 15px 5px rgba(0,0,0,0.5);
    padding: 30px;
    transition: all .5s ease;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-150%)'};
    min-height: 400px;

    @media(max-width:767px) {
        width: 95%;
    }

    > svg {
        position: absolute;
        top: 15px;
        right: 15px;
        color: ${(props) => props.theme.colors.white};
        font-size: 1.5rem;
        cursor: pointer;

        :hover {
            opacity: .8;
        }
    }
`


export const Title = styled.h1`
    color: ${props => props.theme.colors.white};
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 2rem;
`


export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    input[type='date'] {
        width: 25%;
    }
`

export const FooterContainer = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
`

export const ConfirmButton = styled.button`
    padding: 6px 38px;
    font-size: 0.9rem;
    border: none;
    border-radius: 6px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.success};
    margin-left: 1rem;
    :hover{
        opacity: .8;
    }
`

export const CancelButton = styled.button`
    padding: 6px 38px;
    font-size: 0.9rem;
    border: none;
    border-radius: 6px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.warning};
    :hover{
        opacity: .8;
    }
`