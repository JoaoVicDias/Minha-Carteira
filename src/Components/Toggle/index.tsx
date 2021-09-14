import React from 'react'
import { Container, ToggleLabel, ToggleSelector } from './styled'



interface IToggleProps {
    checked:boolean;
    changeFunction:()=>void;
}

const Toggle: React.FC<IToggleProps> = ({ checked, changeFunction }) => (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={changeFunction}
            onHandleColor="#000"
            offHandleColor="#fff"
        />
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)


export default Toggle