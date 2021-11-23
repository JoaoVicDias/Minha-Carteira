import styled from "styled-components"


interface ITagProps {
    frequency:string;
}

export const Conteiner= styled.li `
    background-color: ${props=>props.theme.colors.tertiary};
    width: 85%;
    list-style: none;
    border-radius: 10px;
    margin: 10px auto;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all .3s;
    position: relative;
    color: ${props=>props.theme.colors.white};
    gap: 10px;

    > div span {
        font-size: 1.2rem;
        font-weight: 500;
    }

    @media(max-width:620px) {
        width: 100%;
        flex-wrap: wrap;
    }
`

export const TitleContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
`

export const Tag = styled.div <ITagProps> `
    position: absolute;
    background-color: ${props=> props.frequency === 'recurrent' ? props.theme.colors.success : props.theme.colors.warning};
    left: 0;
    width: 10px;
    height: 60%;
`

export const ButtonsContainer = styled.div `
    display: flex;
    gap: 16px;

    @media(max-width:620px) {
        margin-left: 10px; 
       flex-direction: column;
    }

    > button {
        padding: 6px 16px;
        border-radius: 4px;
        border: none;
        font-size: 1rem;
        color: ${props=>props.theme.colors.white};

        :hover {
            opacity: 0.8;
        }
    }

    .btn__edit--history-card {
        background-color: ${props=>props.theme.colors.success};
    }
    
    .btn__delete--history-card {
        background-color: ${props=>props.theme.colors.warning};
    }
`
