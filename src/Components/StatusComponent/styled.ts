import styled from "styled-components"

export const LoadingContainer = styled.div `
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const NotFoundContainer = styled.div `
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

> h4 {
    font-size: 2rem;
    text-align: center;
    color: ${props=>props.theme.colors.warning};
    margin-bottom: 20px;

    @media(max-width:767px) {
        font-size: 1.5rem;
    }
}

> img {
    width: 500px;
    height: 500px;

    @media(max-width:767px) {
        width: 350px;
        height: 350px;
    }
}
`   

export const ErrorContainer = styled.div `
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

> h4 {
    font-size: 2rem;
    color: ${props=>props.theme.colors.warning};
    margin-bottom: 50px;

    @media(max-width:767px) {
        font-size: 1.5rem;
    }
}
`   