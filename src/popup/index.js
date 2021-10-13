import React, { Fragment } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import './popup.styl'

function Popup() {
    return (
        <Fragment>
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    <Redirect to={'/login'} />
                </Switch>
            </HashRouter>
            
        </Fragment> 
        
    )
}

// function Popup() {
//     return (
//         <div>hello</div>
//     )
// }

export default Popup;