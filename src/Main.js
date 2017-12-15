import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Game from './Game'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/game' component={Game}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/profile' component={Profile}/>
    </Switch>
  </main>
)

export default Main