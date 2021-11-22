import styled from "styled-components";

export const InputConteiner = styled.input `
    width: 100%;
    border-radius: 4px;
    padding: 8px 6px;
    color: black;   
    outline: none;
    font-size: 0.9rem;

    &.input__formerror--conteiner {
       border: 1.5px solid rgba(255, 77, 77);
    }

    &.input__currency--conteiner {
        width: 20%;
        border-radius: 4px;
        padding: 8px 6px;
        color: black;   
        outline: none;
        font-size: 0.9rem;
        position: relative;

    }

`

