import Styled from 'styled-components'
import Switch, { ReactSwitchProps } from 'react-switch'

export const Container =  Styled.div `
    display:flex;
    align-items:center;
`

export const ToggleLabel =  Styled.span `
    color:${props=>props.theme.colors.white};
`

export const ToggleSelector = Styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor:theme.colors.tertiary,
        offColor:theme.colors.tertiary
    })
)<ReactSwitchProps> `
    margin: 0 7px;
`



