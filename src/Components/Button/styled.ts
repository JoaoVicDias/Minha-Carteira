import styled from "styled-components";

export const ButtonConteiner = styled.button `
    width: 100%;
    background-color: ${(props)=>props.theme.colors.warning};
    color: white;
    padding: 10px;
    border-radius: 4px;
    border: none;
    font-size: 0.9rem;

    :hover,
    :active {
        opacity: .9;
    }
`