import React,{ ButtonHTMLAttributes } from 'react'

import { ButtonConteiner } from './styled'


type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button:React.FC<IButtonProps> = ({ children, ...rest}) => <ButtonConteiner  {...rest}> {children} </ButtonConteiner> 




export default Button