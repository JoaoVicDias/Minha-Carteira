import styled from "styled-components";

export  const Conteiner = styled.main `
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primary};
`

export const FormConteiner = styled.div`
    width: 320px;
`

export const FormBrand = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    > img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }

    > h1 {
        font-size: 1.3rem;
        color: ${(props)=>props.theme.colors.white};
    }
`

export const Form = styled.form`
    width: 100%;
    background-color: ${(props)=>props.theme.colors.tertiary};
    padding:40px 20px;
    border-radius: 4px;
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
    margin: 30px 0 0;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const NotHaveAnAccount = styled.div `
    margin: 5px 0 30px;
    cursor: pointer;
    
    > span {
        color: white;
        font-size: 0.9rem;
        text-decoration: underline;
    }

    :active,
    :hover {
        opacity: 0.9;
    }
`