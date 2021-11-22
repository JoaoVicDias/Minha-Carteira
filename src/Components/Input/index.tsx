import React,{ InputHTMLAttributes } from 'react'

import { InputConteiner } from './Styled'


type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input:React.FC<IInputProps> = ({ ...rest}) => <InputConteiner  {...rest}/> 




export default Input