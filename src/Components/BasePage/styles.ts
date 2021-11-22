import styled from 'styled-components'

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;
    grid-template-areas: 
    'AS MH'
    'AS CT';
    height: 100%;
    
    @media(max-width:1024px) {
        grid-template-columns: auto;
        grid-template-rows: 70px auto;
        grid-template-areas: 
        'MH'
        'CT';
        height: 100%;
    }

`