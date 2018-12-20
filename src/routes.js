import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Couches from './components/couches/couches';
import Home from './components/home/home';
import Profile from './components/profile/profile';


export default <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/cool-couches' component={Couches} />
    <Route path='/profile' component={Profile} />
</Switch>