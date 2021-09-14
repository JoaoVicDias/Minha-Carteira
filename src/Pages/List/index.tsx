import React, { useMemo, useEffect, useState, useCallback } from 'react'
import { Conteiner, Filters } from './styled'

import BasePage from '../../Components/BasePage'
import ContentHeader from '../../Components/ContentHeader'
import HistoryFinanceCard from '../../Components/HistoryFinanceCard'
import SelectInput from '../../Components/SelectInput'

import useTheme from '../../Hooks/ThemeContext'

import gains from '../../Repositories/gains'
import expenses from '../../Repositories/expenses'

import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'
import listMonth from '../../utils/ListMonth'



interface IListProps {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    description: string;
    amount: string;
    frequency: string;
    date: string;
    tagColor: string;
    month: number;
    year: number;
}

const List: React.FC<IListProps> = ({ match }) => {

    const { theme } = useTheme()
    const [data, setData] = useState<IData[]>([])
    const [buttonOpenEventual, setButtonOpenEventual] = useState(false)
    const [buttonOpenRecorrente, setButtonOpenRecorrente] = useState(false)
    const [filter, setFilter] = useState<object>({})
    const [filteredData, setFilteredData] = useState<IData[]>([])
    const type = match.params.type

    const title = useMemo(() => {
        return type === "entry-balance" ? { title: "Entradas", lineColor: "#4e41f0" } : { title: "Saídas", lineColor: "#e44c4e" }
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
        listMonth.map((item,idx)=>{
            return realMonths.push({value:idx+1,label:item})
        })

        return realMonths
    }, [])

    const onHandlerData = useCallback(() => {
        const realData = type === 'entry-balance' ? gains : expenses
        const res = realData.map(item => {
            return {
                description: item.description,
                amount: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                date: formatDate(item.date),
                month: new Date(item.date).getMonth() + 1,
                year: new Date(item.date).getFullYear(),
                tagColor: item.frequency === 'recorrente' ? theme.colors.success : theme.colors.warning
            }
        })
        setData(res)
        setFilteredData(res)

    }, [type,theme])

    const onHandlerFilter = useCallback(() => {
        setFilteredData(
            Object.entries(filter).reduce((item, [name, value]) => {
                return item.filter(objto => {
                    if (value === 'todos') return data
                    if (name === 'month') {
                        return objto.month.toString().includes(value)
                    } else if (name === 'year') {
                        return objto.year.toString().includes(value)
                    }else if(name === "frequency"){
                        return objto.frequency.toString().includes(value)
                    }
                    return null
                })
            }, data)
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter])

    const onButtonRecorrenteHandler = useCallback(()=>{
        setButtonOpenRecorrente(prevState=>!prevState)
        setButtonOpenEventual(false)
    },[])

    const onButtonEventualHandler = useCallback(()=>{
        setButtonOpenEventual(prevState=>!prevState)
        setButtonOpenRecorrente(false)
    },[])


    useEffect(() => {
        onHandlerFilter()
    }, [onHandlerFilter])

    useEffect(() => {
        onHandlerData()
    }, [onHandlerData])

    useEffect(() => {
        if(buttonOpenRecorrente){
            setFilter(prevState=>({ ...prevState, "frequency": "recorrente"}))
        }else if(!buttonOpenEventual){
            setFilter(prevState=>({ ...prevState, "frequency": ""}))
        }
    }, [buttonOpenRecorrente,buttonOpenEventual])

    useEffect(() => {
        if(buttonOpenEventual){
            setFilter(prevState=>({ ...prevState, "frequency": "eventual"}))
        }else if(!buttonOpenRecorrente){
            setFilter(prevState=>({ ...prevState, "frequency": ""}))
        }
    }, [buttonOpenEventual,buttonOpenRecorrente])


    return (
        <BasePage>
            <ContentHeader title={title.title} lineColor={title.lineColor}>
                <SelectInput options={onTakeMonths} setValue={(e) => setFilter({ ...filter, "month": e.target.value })} defaultValue={"Todos"} />
                <SelectInput options={onTakeYears} setValue={(e) => setFilter({ ...filter, "year": e.target.value })} defaultValue={"Todos"} />
            </ContentHeader>
            <Filters>
                <button type="button" className={`tag-filter tag-filter-recurrent ${buttonOpenRecorrente && 'tag-actived'}`} onClick={onButtonRecorrenteHandler}>
                    Recorrentes
                </button>
                <button type="button" className={`tag-filter tag-filter-eventual ${buttonOpenEventual && 'tag-actived'}`} onClick={onButtonEventualHandler}>
                    Eventuais
                </button>
            </Filters>
            <Conteiner>
                {
                   filteredData.map((i, idx) => {
                            return <HistoryFinanceCard
                                key={idx}
                                tagColor={i.tagColor}
                                title={i.description}
                                subTitle={i.date}
                                amount={i.amount}
                            />
                        })
                }
            </Conteiner>
        </BasePage>
    )
}

export default List

