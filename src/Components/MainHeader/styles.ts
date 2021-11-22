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

export const LeftItems = styled.div`
    display: flex;
    align-items: center;

    .btn__hamburger--menu {
        display: none;
        width: 25px;
        height: 25px;
        color: ${props => props.theme.colors.white};
        cursor: pointer;
        margin-right: 20px;
    }

    @media(max-width: 1024px) {
        .btn__hamburger--menu {
            display: block;
        }
    }
`

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};

`

export const Welcome = styled.h3`
    
`

export const UserName = styled.span`
    
`