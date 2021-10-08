import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import Rheader from './routerComponent/Rheader'
import Rhome from './Rpages/Rhome'
import Rabout from './Rpages/Rabout'
import Rprofile from './Rpages/Rprofile'
import RnotFound from './Rpages/RnotFound'
import Rpost from './Rpages/Rpost'
import { BrowserRouter } from 'react-router-dom'

const RouterD = () => {
    const [login, setLogin] = useState(false)
    return (
        <BrowserRouter>
        <div className="flex items-center flex-col">
            <Rheader />
            <button onClick={() => setLogin(!login)}>{login ? "LogOut" : "LogIn"}</button>
        <Switch>
            <Route path='/' exact component={Rhome} />
            <Route path='/Rabout' component={Rabout} />
            <Route path='/Rprofile'>
                <Rprofile login={login} />
            </Route>
            <Route path='/Rpost/:id' component={Rpost} />
            <Route component={RnotFound} />
        </Switch>
        </div>
    </BrowserRouter>
    )
}

export default RouterD
