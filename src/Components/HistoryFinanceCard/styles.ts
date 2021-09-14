import styled from "styled-components"


interface ITagProps {
    color:string;
}

export const Conteiner= styled.li `
    background-color: ${props=>props.theme.colors.tertiary};
    width: 80%;
    list-style: none;
    border-radius: 10px;
    margin: 10px auto;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    position: relative;
    color: ${props=>props.theme.colors.white};

    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }

    > div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }

    > div span {
        font-size: 1.2rem;
        font-weight: 500;
    }
`

export const Tag = styled.div <ITagProps> `
    position: absolute;
    background-color: ${props=>props.color};
    left: 0;
    width: 10px;
    height: 60%;
`
