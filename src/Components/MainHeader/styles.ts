import styled from 'styled-components'

export const Header = styled.header`
    grid-area: MH;
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.colors.gray};
    position: relative;
`

export const Profile = styled.div`
    /* display: flex;
    flex-direction: column; */
    color: ${props=>props.theme.colors.white};

`

export const Welcome = styled.h3`
    
`

export const UserName = styled.span`
    
`