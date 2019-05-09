import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Login from '../login'
import Register from '../register'
import Header from '../../components/Header'

const App = () => (
  <div className={'container'}>
    <Header />
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Login/Register" component={Register} />
    </main>
  </div>
)

export default App
