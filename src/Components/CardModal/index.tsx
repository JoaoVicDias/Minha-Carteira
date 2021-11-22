import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { toast } from 'react-toastify';


import Modal from '../Modal'
import Spinner from '../Spinner';
import InputCard from '../InputCard';

import AxiosWithToken from '../../Services/AxiosWithToken';

import validation from '../../utils/ValidationFunction';

import { Container, Title, Form, FooterContainer, CancelButton, ConfirmButton } from './styles'

interface ICreateCardModal {
    isOpen: boolean;
    onClose: (state: boolean) => void;
    cardModalType: 'edit' | 'create';
    reloadPage: () => void;
    editData: any;
}

interface IDropdownItems {
    label: string;
    value: string;
}

interface ICreateModalInfoInput {
    title: {
        value: string;
        title: string;
        type: string;
        isValid: boolean;
        componentType: string;
    },
    amount: {
        value: string;
        title: string;
        type: string;
        isValid: boolean;
        componentType: string;
        parseFunc: (value: string) => void;
        currency: boolean;
        placeHolder: string;
    },
    type: {
        value: string;
        title: string;
        isValid: boolean;
        componentType: string;
        dropDownItems: IDropdownItems[];
    },
    frequency: {
        value: string;
        isValid: boolean;
        title: string;
        componentType: string;
        dropDownItems: IDropdownItems[];
    },
    dateInit: {
        value: string;
        isValid: boolean;
        title: string;
        componentType: string;
        type: string;
    },
    dateEnd: {
        value: string;
        isValid: boolean;
        title: string;
        componentType: string;
        type: string;
    }
}

const CreateCardModal: React.FC<ICreateCardModal> = ({ isOpen, onClose, cardModalType, reloadPage, editData }) => {

    const typeDropdown = useMemo<IDropdownItems[]>(() => (
        [
            { label: 'Saída', value: 'expenses' },
            { label: 'Entrada', value: 'gains' }
        ]
    ), [])

    const frequencyDropdown = useMemo<IDropdownItems[]>(() => (
        [
            { label: 'Recorrente', value: 'recurrent' },
            { label: 'Eventual', value: 'eventual' }
        ]
    ), [])
   
    const parseBackCurrency = useCallback((value: string) => value.length === 1 ? value : value.split('').splice(3, value.length).join('').replace('.', ''), [])
    const [shouldShowError, setShouldShowError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [formValue, setFormValue] = useState<ICreateModalInfoInput | any>({
        title: {
            value: '',
            title: 'Titulo :',
            type: 'text',
            isValid: false,
            componentType: 'input'
        },
        amount: {
            value: '',
            title: 'Preço :',
            type: 'input',
            isValid: false,
            componentType: 'currency',
            placeHolder: 'R$ 0,00',
            parseFunc:parseBackCurrency
        },
        type: {
            value: 'expenses',
            title: 'Tipo do card :',
            isValid: true,
            componentType: 'dropdown',
            dropDownItems: typeDropdown
        },
        frequency: {
            value: 'recurrent',
            isValid: true,
            title: 'Frequência do card :',
            componentType: 'dropdown',
            dropDownItems: frequencyDropdown
        },
        dateInit: {
            value: '',
            title: 'Data inicial :',
            type: 'date',
            isValid: false,
            componentType: 'input'
        },
        dateEnd: {
            value: '',
            title: 'Data final :',
            type: 'date',
            isValid: false,
            componentType: 'input',
        }
    })

    const formConfig = useMemo(() => {
        let config: any[] = []

        for (let key in formValue) {
            config.push({
                name: key,
                ...formValue[key]
            })
        }

        return config
    }, [formValue])

    const onCloseHandler = useCallback(() => onClose(false), [onClose])

    const cleanInputsValues = useCallback(() => {
        setShouldShowError(false)
        return setFormValue((prevState: any) => {
            let newState = { ...prevState }
            Object.keys(prevState).map(item => {
                if (item === 'type') {
                    return newState = { ...newState, [item]: { ...newState[item], value: 'expenses', isValid: true, isTouched: false } }
                } else if (item === 'frequency') {
                    return newState = { ...newState, [item]: { ...newState[item], value: 'recurrent', isValid: true, isTouched: false } }
                }
                return newState = { ...newState, [item]: { ...newState[item], value: '', isValid: false, isTouched: false } }
            })
            return newState
        })
    }, [])

    const onChangeFormHandler = useCallback((value: string, typeName: string, parseFunc: (value: string) => string, componentType: string, type: string) => {

        if(componentType === 'currency' && isNaN(+parseFunc(value))) {
            return 
        }

        if(type === 'date'){
            const currentDate = new Date(`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate() - 1} 00:00`)
            if(new Date(value) < currentDate) return toast.error('Não pode selecionar datas passadas!')
        }
        

        if (typeName === 'frequency' && value === 'recurrent') {
            setFormValue((prevState: any) => ({
                ...prevState,
                'dateEnd': {
                    ...prevState['dateEnd'],
                    value: '',
                    isValid: false
                }
            }))
        }

        setFormValue((prevState: any) => ({
            ...prevState,
            [typeName]: {
                ...prevState[typeName],
                value: parseFunc ? parseFunc(value) : value,
                isValid: validation('', parseFunc ? parseFunc(value) : value),
            }
        }))
    }, [])

    const onSubmitFormCreate = useCallback(async () => {
        let isValid: boolean
        setShouldShowError(true)

        if (formValue.frequency.value === 'eventual') {
            isValid = Object.keys(formValue).every(item => formValue[item].isValid)
        } else {
            isValid = Object.keys(formValue).filter(item => item !== 'dateEnd').every(item => formValue[item].isValid)
        }

        if (!isValid) return toast.error('Preencha todos os campos corretamente!')

        const dataCreate = {
            title: formValue.title.value,
            amount: parseFloat(formValue.amount.value),
            type: formValue.type.value,
            frequency: formValue.frequency.value,
            dateInit: new Date(formValue.dateInit.value).toISOString(),
            dateEnd: formValue.dateEnd.value ? new Date(formValue.dateEnd?.value).toISOString() : null
        }

        const dataEdit = {
            id: editData.id,
            title: formValue.title.value,
            amount: parseFloat(formValue.amount.value),
            type: formValue.type.value,
            frequency: formValue.frequency.value,
            dateInit: new Date(formValue.dateInit.value).toISOString(),
            dateEnd: formValue.dateEnd.value ? new Date(formValue.dateEnd?.value).toISOString() : null
        }

        const endPointTypes = cardModalType === 'create' ? AxiosWithToken.post('/card/create-card', dataCreate) : AxiosWithToken.patch('/card/edit-card', dataEdit)

        try {
            setLoading(true)
            await endPointTypes
            setLoading(false)
            onCloseHandler()
            cleanInputsValues()
            reloadPage()
            toast.success(`Card ${cardModalType === 'create' ? 'criado' : 'editado'} com sucesso!`)

        } catch (error: any) {
            setLoading(false)
            toast.error(error.response.data)
        }

    }, [formValue, onCloseHandler, cleanInputsValues, cardModalType, reloadPage, editData.id])

    useEffect(() => {
        setFormValue((prevState:any)=>{
            let newState = {...prevState}
            for(let key in editData) {
                if(key === 'id') continue
                newState = {
                    ...newState,
                    [key]:{
                        ...newState[key],
                        value:editData[key],
                        isValid:validation('', editData[key])
                    }
                }
            }
            return newState
        })
    }, [editData])

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Container isOpen={isOpen}>
                <MdClose onClick={onCloseHandler} />
                <Title>  {cardModalType === 'create' ? 'Criar card' : 'Editar card'} </Title>
                {
                    loading ? <Spinner /> :
                        <Form >
                            {
                                formConfig.map(item => {
                                    if (item.name === 'dateEnd') {
                                        if (formValue['frequency'].value === 'recurrent') return null
                                    }
                                    return (
                                        <InputCard title={item.title} dropDownItems={item.dropDownItems} placeHolder={item.placeHolder} type={item.type} key={item.name} value={item.value} onChange={(e) => onChangeFormHandler(e.target.value, e.target.name, item.parseFunc, item.componentType, item.type)} name={item.name} componentType={item.componentType} error={shouldShowError ? !item.isValid : false} />
                                    )
                                })
                            }

                            <FooterContainer>
                                <CancelButton onClick={onCloseHandler}>Cancelar</CancelButton>
                                <ConfirmButton onClick={onSubmitFormCreate}>{ cardModalType === 'create' ? 'Criar' : 'Editar' }</ConfirmButton>
                            </FooterContainer>
                        </Form>
                }
            </Container>
        </Modal>
    )
}


export default CreateCardModal