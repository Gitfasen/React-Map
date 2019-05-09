import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import User from '../user'
import Header from '../../components/Header'

const App = () => (
  <div className="container">
    <Header />
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/user" component={User} />
    </main>
  </div>
)

export default App
