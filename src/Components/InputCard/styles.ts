import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    .input__formerror--conteiner {
       border: 1.5px solid rgba(255, 77, 77);
    }

    .input__currency--conteiner {
        width: 20%;
        border-radius: 4px;
        padding: 8px 6px;
        color: black;   
        outline: none;
        font-size: 0.9rem;
        position: relative;

    }
`

export const LabelTitle = styled.label`
        font-size: 1.1rem;
        color: ${(props) => props.theme.colors.white};
        margin-right: 20px;
        white-space: nowrap;
`

export const ContainerDropdown = styled.div `
    display: flex;
    flex-direction: column;
`

export const Dropdown = styled.select `
    margin-top:15px ;
    width: 100%;
    border-radius: 4px;
    padding: 8px 6px;
    color: black;
    font-size: 0.9rem;
`