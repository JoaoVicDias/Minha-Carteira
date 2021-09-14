import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './Pages/Dashboard'
import List from './Pages/List'
import SignIn from './Pages/SignIn'


const Routes: React.FC = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/list/:type" component={List} />
                <Route exact path="/sign-in" component={SignIn} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes