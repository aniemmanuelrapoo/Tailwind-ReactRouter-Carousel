import React, { useEffect } from 'react'
import { Route, Switch, useHistory, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import ReditProfile from './ReditProfile'
import RviewProfile from './RviewProfile'

const Rprofile = ({ login }) => {
    const history = useHistory()
    useEffect(() => {
        if(!login) {
            history.push('/')
        }
    }, [login, history])

    const { path, url } = useRouteMatch()
    return (
        <div>
            <h1>profile page</h1>
            <ul>
                <li>
                    <Link to={`${url}/rviewprofile`}>View</Link>
                </li>
                <li>
                    <Link to={`${url}/reditprofile`}>Edit</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${path}/rviewprofile`} component={RviewProfile} />
                <Route path={`${path}/reditprofile`} component={ReditProfile} />
            </Switch>
        </div>
    )
}

export default Rprofile
