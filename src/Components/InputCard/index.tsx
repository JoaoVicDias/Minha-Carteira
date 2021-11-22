import React from 'react'
import CurrencyInput from 'react-currency-input-field'

import Input from '../Input'

import { Container, ContainerDropdown, LabelTitle, Dropdown } from './styles'

interface IInputCard {
    title: string;
    onChange: (e: any) => void;
    name: string;
    error: boolean;
    value: string;
    type?: string;
    componentType: 'input' | 'dropdown' | 'currency';
    dropDownItems: any[];
    placeHolder?:string;
}

const InputCard: React.FC<IInputCard> = ({ title, onChange, name, error, value, type, componentType, dropDownItems, placeHolder }) => {
    switch (componentType) {
        case "input":
            return (
                <Container>
                    <LabelTitle> {title} </LabelTitle>
                    <Input type={type} value={value} placeholder={placeHolder} className={`${error ? 'input__formerror--conteiner' : ''} `} name={name} onChange={onChange} />
                </Container>
            )

            case "currency":
                return (
                    <Container>
                        <LabelTitle> {title} </LabelTitle>
                        <CurrencyInput intlConfig={{ locale: 'pt-BR', currency: 'BRL' }} decimalScale={2} value={value} type={type} placeholder={placeHolder} className={`${error ? 'input__formerror--conteiner' : ''}  input__currency--conteiner`} name={name} onChange={onChange} />
                    </Container>
                )

        case 'dropdown':
            return (
                <ContainerDropdown>
                    <LabelTitle> {title} </LabelTitle>
                   <Dropdown value={value} onChange={onChange} name={name} >
                       {
                           dropDownItems.map(item => (
                               <option key={item.value} value={item.value}> {item.label} </option>
                           ))
                       }
                   </Dropdown>
                </ContainerDropdown>
            )
            default:
                return null
    }
}




export default InputCard