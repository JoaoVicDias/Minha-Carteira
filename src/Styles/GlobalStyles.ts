import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
    * {
        margin:0;
        box-sizing:border-box;
        font-family: "Roboto", sans-serif;
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