import React, { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

import Input from '../../Components/Input'
import Button from '../../Components/Button'
import Spinner from '../../Components/Spinner'

import MinhaCarteiraAxios from '../../Services/MinhaCarteiraAxios'

import validation from '../../utils/ValidationFunction'

import { Form, FormTitle, InputsConteiner, CloseButton } from './styled'


interface ISignupModalProps {
    show: boolean;
    setShow(status: boolean): void;
}

interface IInputsState {
    name: {
        value: string;
        isValid: boolean;
        isTouched: boolean;
    };
    email: {
        value: string;
        isValid: boolean;
        isTouched: boolean;
    };
    password: {
        value: string;
        isValid: boolean;
        isTouched: boolean;
    };
    secondPassword: {
        value: string;
        isValid: boolean;
        isTouched: boolean;
    };
}

const SignupModal: React.FC<ISignupModalProps> = ({ show, setShow }) => {

    const [formValue, setFormValue] = useState<IInputsState>({
        name: {
            value: "",
            isValid: false,
            isTouched: false
        },
        email: {
            value: "",
            isValid: false,
            isTouched: false
        },
        password: {
            value: "",
            isValid: false,
            isTouched: false
        },
        secondPassword: {
            value: "",
            isValid: false,
            isTouched: false
        }
    })
    const [loading, setLoading] = useState<Boolean>(false)


    const onChangeInputsHandler = useCallback((e) => {
        setFormValue(prevState => ({
            ...prevState,
            [e.target.name]: {
                value: e.target.value,
                isValid: validation(e.target.name, e.target.value),
                isTouched: true
            }
        }))
    }, [])

    const onSubmitForm = useCallback(async (e) => {
        e.preventDefault()
        const isToSubmit = Object.entries(formValue).filter(i => i[1].isValid === false).length > 0 ? false : true

        if (!isToSubmit) {
            return toast.error('Insira todas as informações corretamente!')
        }

        if (formValue.password.value !== formValue.secondPassword.value) {
            setFormValue(prevState => ({ ...prevState, 'password': { ...prevState['password'], isValid: false }, 'secondPassword': { ...prevState['secondPassword'], isValid: false } }))
            return toast.error('Sua senha precisa ser igual nos dois campos!')
        }

        const data = {
            name: formValue.name.value,
            email: formValue.email.value,
            password: formValue.password.value
        }

        try {
            setLoading(true)
            const res = await MinhaCarteiraAxios.post('auth/signup', data)
            toast.success(res.data.message)
            setLoading(false)
        } catch (error: any) {
            setLoading(false)
            toast.error(error.response.data)
        }

    }, [formValue])

    return (
        <Form show={show} onSubmit={(e) => onSubmitForm(e)}>
            <CloseButton onClick={() => setShow(false)}>x</CloseButton>
            <FormTitle>Cadastrar</FormTitle>
            {
                loading ? <Spinner></Spinner> :
                    <>
                        <InputsConteiner>
                            <Input className={`${formValue.name.isTouched && !formValue.name.isValid && 'input__formerror--conteiner'}`} type="text" name="name" placeholder="Nome" autoComplete="username" onChange={(e) => onChangeInputsHandler(e)} />
                            <Input className={`${formValue.email.isTouched && !formValue.email.isValid && 'input__formerror--conteiner'}`} type="email" name="email" placeholder="E-mail" autoComplete="username" onChange={(e) => onChangeInputsHandler(e)} />
                            <Input className={`${formValue.password.isTouched && !formValue.password.isValid && 'input__formerror--conteiner'}`} type="password" name="password" placeholder="Senha" autoComplete="current-password" onChange={(e) => onChangeInputsHandler(e)} />
                            <Input className={`${formValue.secondPassword.isTouched && !formValue.secondPassword.isValid && 'input__formerror--conteiner'}`} type="password" name="secondPassword" placeholder="Confirmar senha" autoComplete="current-password" onChange={(e) => onChangeInputsHandler(e)} />
                        </InputsConteiner>
                        <Button>Cadastrar</Button>
                    </>
            }
        </Form>
    )
}

export default SignupModal