import React, { useMemo } from 'react'

import Spinner from '../Spinner'

import notFoundImage from '../../Assets/notFound.png'
import errrorImage from '../../Assets/error.png'

import { LoadingContainer, NotFoundContainer, ErrorContainer } from './styled'

interface IStatusComponentProps {
    statusName: 'loading' | 'error' | 'notFound' | 'success';
    children:React.ReactNode;
}

const StatusComponent:React.FC<IStatusComponentProps> = ({statusName, children}) => {

    const statusComponentMemo = useMemo(() => {
        switch (statusName) {
            case "success":
                return (
                    <>
                        {children}
                    </>
                )
            case "error":
                return (
                    <ErrorContainer>
                         <h4> Algo aconteceu de errado, tente novamente! </h4>
                        <img src={errrorImage} alt="Algo de errado aconteceu, tente novamente mais tarde!" loading="lazy" />
                    </ErrorContainer>
                )
            case "loading":
                return (
                    <LoadingContainer>
                        <Spinner/>
                    </LoadingContainer>
                )
            case "notFound": 
                return (
                    <NotFoundContainer>
                        <h4> Nenhum resultado foi encontrado! </h4>
                        <img src={notFoundImage} alt="Conteúdo não encontrado!" loading="lazy" />
                    </NotFoundContainer>    
                )

            default:
                break
        }
    }, [statusName, children])

    return (
        <>
            {
                statusComponentMemo
            }
        </>
    )
} 

export default StatusComponent