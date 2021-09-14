import React,{useState} from 'react'

import brandImg from '../../Assets/logo.svg'

import Input from '../../Components/Input'
import Button from '../../Components/Button'
import Backdrop from '../../Components/Backdrop'
import SignupModal from '../../Components/SignupModal'

import { Conteiner, FormConteiner, FormBrand, Form, FormTitle, InputsConteiner, NotHaveAnAccount } from './styled'


const SignIn: React.FC = props => {

    const [showModal,setShowModal ] = useState<boolean>(true)

    return (
        <Conteiner>
            <Backdrop show={showModal} setShow={setShowModal} />
            <SignupModal show={showModal} setShow={setShowModal} />
            <FormConteiner>
                <FormBrand>
                    <img src={brandImg} alt="Logo Minha-Carteira"/>
                    <h1>Minha Carteira</h1>
                </FormBrand>
                <Form>  
                    <FormTitle>Entrar</FormTitle>
                    <InputsConteiner>
                        <Input type="email" name="email" autoComplete="username" placeholder="E-mail"/>
                        <Input type="password" name="password" autoComplete="current-password"  placeholder="Senha"/>
                    </InputsConteiner>
                    <NotHaveAnAccount onClick={()=>setShowModal(true)}>
                        <span>
                        Não tem uma conta?Clique aqui!!
                        </span>
                    </NotHaveAnAccount>
                    <Button>Acessar</Button>

                </Form>
            </FormConteiner>
        </Conteiner>
    )
}

export default SignIn