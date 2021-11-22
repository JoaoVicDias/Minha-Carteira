import React from 'react'
import { Container } from './styled'

interface ISelectInputsProps {
    options: {
        value: string | number,
        label: string | number
    }[],
    setValue(event:React.ChangeEvent<HTMLSelectElement>): void | undefined;
    defaultValue?: string | number;
    isToDisabled?:boolean;
}


const SelectInput: React.FC<ISelectInputsProps> = ({ options, setValue, defaultValue, isToDisabled }) => {

    return (
        <Container>
            <select onChange={setValue} defaultValue={defaultValue} disabled={isToDisabled}>
                {
                    options.map(option => {
                        return <option key={option.value} value={option.value}> {option.label} </option>
                    })
                }
            </select>
        </Container>
    )
}

export default SelectInput