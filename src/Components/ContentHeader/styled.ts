import styled from "styled-components";

interface ITitleProps {
    lineColor:string;
}

export const Container = styled.div ` 
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media(max-width:767px) {
        flex-direction: column;
    }
` 

export const Title = styled.div<ITitleProps>` 

    > h1 {
        color: ${props=>props.theme.colors.white};

        &::after {
            content:'';
            display: block;
            width: 55px;
            border-bottom: 10px solid ${props=>props.lineColor};
        }

        @media(max-width:767px) {
            margin-bottom: 20px;
        }
    }
` 


export const Controllers = styled.div ` 
    display: flex;
` 