import styled from "styled-components";

export const Container =  styled.div `
    > select {
        padding: 7px 10px;
        border-radius: 5px;
        margin-left: 7px;

        :disabled {
            cursor: not-allowed;
        }

        @media(max-width:430px) {
            margin-left: 0px;
            margin: 0 7px 0 0;
        }
    }
`