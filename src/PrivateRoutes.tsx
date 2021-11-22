import React from 'react'

import BasePage from './Components/BasePage'
import Dashboard from './Pages/Dashboard'
import List from './Pages/List'

import PrivateRoute from './Components/PrivateRoute'




const PrivateRoutes: React.FC = () => {

    return (
        <BasePage>
            <PrivateRoute exact path="/" componentRouter={Dashboard} />
            <PrivateRoute exact path="/list/:type" componentRouter={List} />
        </BasePage>
    )
}

export default PrivateRoutes