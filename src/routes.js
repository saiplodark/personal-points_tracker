import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from './componenets/Main';
import Amex from './componenets/banks/Amex';
import Chase from './componenets/banks/Chase';
import Citi from './componenets/banks/Citi';
import Login from './componenets/Login'

export default <Switch>
        <Route exact path = "/" component={Main}/>
        <Route path="/amex" component={Amex}/>
        <Route path="/chase" component={Chase}/>
        <Route path="/citi" component={Citi}/>
        <Route path = "/login" component={Login}/>
</Switch>