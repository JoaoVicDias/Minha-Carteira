import React, { useCallback, useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import { toast } from 'react-toastify'


import brandImg from '../../Assets/logo.svg'

import Input from '../../Components/Input'
import Button from '../../Components/Button'
import SignupModal from '../../Components/SignupModal'
import Spinner from '../../Components/Spinner'

import Validation from '../../utils/ValidationFunction'

import useUser from '../../Hooks/UserContext'

import { Conteiner, FormConteiner, FormBrand, Form, FormTitle, InputsConteiner, NotHaveAnAccount } from './styled'
import MinhaCarteiraAxios from '../../Services/MinhaCarteiraAxios'



interface IFormValue {
    email: {
        value: string;
        isValid: boolean;
        isTouched: boolean;
    },
    password: {
        value: string;
        isValid: boolean;
        isTouched: boolean;
    }
}

const SignIn: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [unMounted, setUnMounted] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [formValue, setFormValue] = useState<IFormValue>({
        email: {
            value: '',
            isValid: false,
            isTouched: false
        },
        password: {
            value: '',
            isValid: false,
            isTouched: false
        }
    })
    const { logged, setLogged } = useUser()

    const onInputValueHandler = useCallback((e) => {
        setFormValue(prevState => ({
            ...prevState,
            [e.target.name]: {
                value: e.target.value,
                isValid: Validation(e.target.name, e.target.value),
                isTouched: true
            }
        }))
    }, [])

    const cleanInputsValues = useCallback(() => {
        setFormValue(prevState => {
            let newState = { ...prevState }
            Object.keys(prevState).map(item => newState = { ...newState, [item]: { value: '', isValid: false, isTouched: false } })
            return newState
        })
    }, [])

    const onSendFormHandler = useCallback(async (e) => {
        e.preventDefault()

        const isToSubmit = Object.entries(formValue).filter(item => !item[1].isValid).length > 0 ? false : true

        if (!isToSubmit) return toast.error('Insira todas as informações corretamente!')

        const data = {
            email: formValue.email.value,
            password: formValue.password.value
        }

        try {
            setLoading(true)
            const res = await MinhaCarteiraAxios.post('auth/signin', data)
            setUnMounted(true)
            localStorage.setItem('userToken', res.data.token)
            setLogged(true)
            setLoading(false)
            toast.success('Bem vindo!!')

        } catch (e: any) {
            setLoading(false)
            setLogged(false)
            setFormValue(prevState => ({ ...prevState, 'password': { isTouched: false, isValid: false, value: '' } }))
            toast.error(e.response?.data || 'Algo deu errado, tente novamente mais tarde!')
        }

    }, [formValue, setLogged])

    useEffect(() => {
        if (unMounted) {
            return () => cleanInputsValues()
        }
    }, [cleanInputsValues, unMounted])

    return (
        <Conteiner>
            {logged && <Redirect to="/" />}
            <SignupModal show={showModal} setShow={setShowModal} />
            <FormConteiner>
                <FormBrand>
                    <img src={brandImg} alt="Logo Minha-Carteira" />
                    <h1>Minha Carteira</h1>
                </FormBrand>
                <Form onSubmit={(e) => onSendFormHandler(e)}>
                    <FormTitle>Entrar</FormTitle>
                    {
                        loading ? <Spinner /> :
                            <>
                                <InputsConteiner>
                                    <Input className={`${formValue.email.isTouched && !formValue.email.isValid && 'input__formerror--conteiner'}`} value={formValue.email.value} type="email" name="email" autoComplete="username" placeholder="E-mail" onChange={(e) => onInputValueHandler(e)} />
                                    <Input className={`${formValue.password.isTouched && !formValue.password.isValid && 'input__formerror--conteiner'}`} value={formValue.password.value} type="password" name="password" autoComplete="current-password" placeholder="Senha" onChange={(e) => onInputValueHandler(e)} />
                                </InputsConteiner>
                                <NotHaveAnAccount onClick={() => setShowModal(true)}>
                                    <span>
                                        Não tem uma conta?Clique aqui!!
                                    </span>
                                </NotHaveAnAccount>
                                <Button>Acessar</Button>
                            </>
                    }

                </Form>
            </FormConteiner>
        </Conteiner>
    )
}

export default SignIn