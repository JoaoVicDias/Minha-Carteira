import styled from "styled-components";

interface IConteinerProps {
    color:string;
}

export const Conteiner = styled.article<IConteinerProps> `
    overflow: hidden;
    height: 150px;
    width: 30%;
    color:${props=>props.theme.colors.white};
    background-color: ${props=>props.color};
    border-radius: 7px;
    padding: 10px 20px;
    position: relative;

    > span{
        font-size: 1.125rem;
        font-weight: 500;
    }

    > h1{

    }

    > small{
        font-size: 0.75rem;
        position: absolute;
        bottom: 10px;
    }

    > img{
        height: 110%;
        position: absolute;
        top: -10px;
        right: -30px;
        opacity: .3;
    }
`