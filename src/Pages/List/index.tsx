import React, { useMemo, useEffect, useState, useCallback } from 'react'
import { MdCreate } from 'react-icons/md'

import CardModal from '../../Components/CardModal'
import ContentHeader from '../../Components/ContentHeader'
import HistoryFinanceCard from '../../Components/HistoryFinanceCard'
import SelectInput from '../../Components/SelectInput'
import StatusComponent from '../../Components/StatusComponent'

import AxiosWithToken from '../../Services/AxiosWithToken'


import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'
import listMonth from '../../utils/ListMonth'

import { PageSettingsContainer, Conteiner, Filters } from './styled'

interface IListProps {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string;
    title: string;
    amount: string;
    frequency: string;
    dateInit: string;
    dateEnd: string;
    tagColor: string;
    month: number;
    year: number;
}

interface IModalSettings {
    show: boolean;
    type: 'create' | 'edit';
}

const List: React.FC<IListProps> = ({ match }) => {

    const [data, setData] = useState<IData[]>([])
    const [buttonOpenEventual, setButtonOpenEventual] = useState(false)
    const [buttonOpenRecorrente, setButtonOpenRecorrente] = useState(false)
    const [filter, setFilter] = useState<object>({})
    const [filteredData, setFilteredData] = useState<IData[]>([])
    const [statusName, setStatusName] = useState<'loading' | 'error' | 'success' | 'notFound'>("loading")
    const [componentMount, setComponentMount] = useState<boolean>(false)
    const [isToDisabled, setIsToDisabled] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<IModalSettings>({ show: false, type: 'create' })
    const [editData, setEditData] = useState({})
    const type = match.params.type

    const title = useMemo(() => {
        return type === "gains" ? { title: "Entradas", lineColor: "#4e41f0" } : { title: "Saídas", lineColor: "#e44c4e" }
    }, [type])

    const onTakeYears = useMemo(() => {
        const years: number[] = []
        const realyears: any[] = [{ value: "todos", label: "Todos" }]
        data.map(item => {
            if (!years.includes(item.year)) years.push(item.year)
            return null
        })

        years.map(item => {
            return realyears.push({ label: item, value: item })
        })

        return realyears
    }, [data])

    const onTakeMonths = useMemo(() => {
        const realMonths: any[] = [{ value: "todos", label: "Todos" }]
        listMonth.map((item, idx) => {
            return realMonths.push({ value: idx + 1, label: item })
        })

        return realMonths
    }, [])

    const onHandlerData = useCallback(async () => {
        setStatusName("loading")
        try {
            const res = await AxiosWithToken.get(`card/${type}`)
            setStatusName(res.data.length > 0 ? "success" : 'notFound')

            const treatedData = res.data.map((item: any) => {
                return {
                    id: item.id,
                    title: item.title,
                    amount: item.amount,
                    frequency: item.frequency,
                    dateInit: item.dateInit,
                    dateEnd: item.dateEnd,
                    type: item.type,
                    month: new Date(item.dateInit).getMonth() + 1,
                    year: new Date(item.dateInit).getFullYear(),
                }
            })
            setData(treatedData)
            setFilteredData(treatedData)
            setComponentMount(true)
            setIsToDisabled(false)
        } catch (e: any) {
            setStatusName("error")
            setIsToDisabled(true)
            console.log(e)
        }

    }, [type])

    const onHandlerFilter = useCallback(() => {
        setFilteredData(
            Object.entries(filter).reduce((item, [name, value]) => {
                return item.filter(objto => {
                    if (value === 'todos') return data
                    if (name === 'month') {
                        return objto.month.toString() === value.toString()
                    } else if (name === 'year') {
                        return objto.year.toString() === value.toString()
                    } else if (name === "frequency") {
                        return objto.frequency.toString().includes(value)
                    }
                    return null
                })
            }, data)
        )
        if (componentMount) setStatusName(filteredData.length > 0 ? 'success' : 'notFound');

    }, [filter, data, componentMount, filteredData.length])

    const onButtonRecorrenteHandler = useCallback(() => {
        setButtonOpenRecorrente(prevState => !prevState)
        setButtonOpenEventual(false)
    }, [])

    const onButtonEventualHandler = useCallback(() => {
        setButtonOpenEventual(prevState => !prevState)
        setButtonOpenRecorrente(false)
    }, [])

    const onOpenCreateModalHandler = useCallback(() => {
        setShowModal(() => ({ type: 'create', show: true }))
        setEditData({
            id:'',
            title: '',
            amount: '',
            type: 'expenses',
            frequency:'recurrent',
            dateInit: '',
            dateEnd:  ''
        })
    }, [])

    const onOpenEditModalHandler = useCallback((card: any) => {
        
        setShowModal(() => ({ type: 'edit', show: true }))

        setEditData({
            id:card.id,
            title: card.title,
            amount: String(card.amount),
            type: card.type,
            frequency:card.frequency,
            dateInit: new Date(card.dateInit).toISOString().split('T')[0],
            dateEnd: card.dateEnd ? new Date(card.dateEnd).toISOString().split('T')[0] : ''
        })
    }, [])

    const onDeleteCardHandler = useCallback(async (cardId: string) => {
        try {
            setStatusName('loading')
            await AxiosWithToken.delete(`card/delete/${cardId}`)
            onHandlerData()
        } catch (e) {
            setStatusName('error')
            console.log(e)
        }
    }, [onHandlerData])

    useEffect(() => {
        onHandlerData()
    }, [onHandlerData])

    useEffect(() => {
        onHandlerFilter()
    }, [onHandlerFilter])

    useEffect(() => {
        if (buttonOpenRecorrente) {
            setFilter(prevState => ({ ...prevState, "frequency": "recurrent" }))
        } else if (!buttonOpenEventual) {
            setFilter(prevState => ({ ...prevState, "frequency": "" }))
        }
    }, [buttonOpenRecorrente, buttonOpenEventual])

    useEffect(() => {
        if (buttonOpenEventual) {
            setFilter(prevState => ({ ...prevState, "frequency": "eventual" }))
        } else if (!buttonOpenRecorrente) {
            setFilter(prevState => ({ ...prevState, "frequency": "" }))
        }
    }, [buttonOpenEventual, buttonOpenRecorrente])


    return (
        <>
            <CardModal isOpen={showModal.show} reloadPage={onHandlerData} editData={editData} onClose={() => setShowModal(prevState => ({ ...prevState, show: false }))} cardModalType={showModal.type} />
            <ContentHeader title={title.title} lineColor={title.lineColor}>
                <PageSettingsContainer>
                    <button onClick={onOpenCreateModalHandler}>
                        <MdCreate />
                        <span>Criar card</span>
                    </button>
                    <div>
                        <SelectInput options={onTakeMonths} isToDisabled={isToDisabled} setValue={(e) => setFilter({ ...filter, "month": e.target.value })} defaultValue={"Todos"} />
                        <SelectInput options={onTakeYears} isToDisabled={isToDisabled} setValue={(e) => setFilter({ ...filter, "year": e.target.value })} defaultValue={"Todos"} />
                    </div>
                </PageSettingsContainer>
            </ContentHeader>
            <Filters>
                <button type="button" className={`tag-filter tag-filter-recurrent ${buttonOpenRecorrente && 'tag-actived'}`} onClick={onButtonRecorrenteHandler} disabled={isToDisabled}>
                    Recorrentes
                </button>
                <button type="button" className={`tag-filter tag-filter-eventual ${buttonOpenEventual && 'tag-actived'}`} onClick={onButtonEventualHandler} disabled={isToDisabled}>
                    Eventuais
                </button>
            </Filters>
            <StatusComponent statusName={statusName}>
                <Conteiner>
                    {
                        filteredData.map((i) => {
                            return <HistoryFinanceCard
                                key={i.id}
                                title={i.title}
                                subTitle={formatDate(i.dateInit)}
                                amount={formatCurrency(Number(i.amount))}
                                frequency={i.frequency}
                                onDelete={() => onDeleteCardHandler(i.id)}
                                onEdit={() => onOpenEditModalHandler(i)}
                            />
                        })
                    }
                </Conteiner>
            </StatusComponent>
        </>
    )
}

export default List

