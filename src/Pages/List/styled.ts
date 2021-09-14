import styled from "styled-components";


export const Conteiner = styled.section`

`

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    .tag-filter {
        font-size: 1.2rem;
        font-weight: 500;
        background: none;
        color: ${props => props.theme.colors.white};
        margin: 0 10px;
        transition: opacity .3s;
        opacity: .4;

        &:hover {
            opacity: .7;
        }
    }

    .tag-filter-recurrent::after {
            content: "";
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.colors.success};

    }

    .tag-filter-eventual::after {
            content: "";
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.colors.warning};

    }

    .tag-actived{
        opacity: 1;
    }
`































// export const Filtro = styled.div `
//     background-color: #F9F5F2;
//     padding: 17px 22px;
//     width: 80%;
//     margin: 50px auto;

// `

// export const ConteinerFiltro = styled.div `
//     display: flex;
//     justify-content: space-between;
//     flex-wrap: wrap;
//     width: 95%;
//     margin:56px auto 20px ;
// `

// export const DivElementoFiltro = styled.div `
//     width: 18%;
//     min-width: 76px;
// `

// export const FiltroTitle = styled.h6 `
// `

// export const FiltroCampo = styled.input `
// `

// export const ContainerButton = styled.div `
//     width: 100%;
//     text-align: end;
// `

// export const FiltroButton = styled.button `
// `
