import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
    * {
        margin:0;
        box-sizing:border-box;
        font-family: "Roboto", sans-serif;

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        -moz-appearance: textfield;
        margin: 0;
        }
    }
    
    body,#root,.App {
        width:100vw;
        height:100vh;
    }

    button, input{
        border: 0;
    }

    button {
        cursor: pointer;
    }
`