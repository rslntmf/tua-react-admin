import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Opportunities from '../pages/Opportunities'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/opportunities' component={Opportunities}/>
        </Switch>
    )
}

export default Routes
