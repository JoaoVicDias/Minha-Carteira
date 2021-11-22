import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import BasePage from './Components/BasePage'
import Dashboard from './Pages/Dashboard'
import List from './Pages/List'
import SignIn from './Pages/SignIn'

import PrivateRoute from './Components/PrivateRoute'




const Routes: React.FC = () => {

    return (
        <BrowserRouter>
            <BasePage>
                <Switch>
                    <Route exact path="/sign-in" component={SignIn} />
                    <PrivateRoute exact path="/" componentRouter={Dashboard} />
                    <PrivateRoute exact path="/list/:type" componentRouter={List} />
                    <Redirect to="/" />
                </Switch>
            </BasePage>
        </BrowserRouter>
    )
}

export default Routes