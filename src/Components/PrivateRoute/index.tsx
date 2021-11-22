import React, { useMemo } from 'react'
import { Route, Redirect } from 'react-router-dom'


import useUser from '../../Hooks/UserContext'


interface IPrivateRoute {
    exact?:boolean;
    path:string;
    componentRouter:React.FC<any>;
}

const PrivateRoute: React.FC <IPrivateRoute> = ({componentRouter, path, exact }) => {

    const { logged } = useUser()

    const RouterComponent = useMemo(()=> {
        if(logged){
            return <Route  exact={exact} path={path} component={componentRouter}/>
        }else {
            return <Redirect to="/sign-in" />
        }
    } ,[logged, componentRouter, path, exact])

    return RouterComponent

}



export default PrivateRoute