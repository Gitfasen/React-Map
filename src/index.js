import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import About from './components/About';
import Users from './components/Users';
import Home from './components/Home';
import './app.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialStore = {
	markers: [
		[54.98, 82.89],
		[54.98076605428236, 82.90841102600099],
		[54.97771218642984, 82.87716865539552]
	],
	users: {
		login: 'admin',
		pass: 'admin'
	},
	isLogin: false
};

const Markers = (state = initialStore, action) => {
	if (action.type === 'ADD_MARKER') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}
const store = createStore(Markers);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div className={'container'}>
				<Header />
				<div className={'main-wr'}>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/users" component={Users} />
				</div>
			</div>
		</Router>
	</Provider>,
  document.getElementById('root')
);
