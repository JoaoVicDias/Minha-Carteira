import React from 'react'
import { Container } from './styled'

interface ISelectInputsProps {
    options: {
        value: string | number,
        label: string | number
    }[],
    setValue(event:React.ChangeEvent<HTMLSelectElement>): void | undefined;
    defaultValue?: string | number;
}


const SelectInput: React.FC<ISelectInputsProps> = ({ options, setValue, defaultValue }) => {

    return (
        <Container>
            <select onChange={setValue} defaultValue={defaultValue}>
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