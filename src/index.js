import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import store from './store'
import App from './containers/app'

import 'sanitize.css/sanitize.css'
import './index.less'


const target = document.querySelector('#root')
render(
  <Provider store={store}>
    <Router>
      <div>
        <App />
      </div>
		</Router>
  </Provider>,
  target
)

