import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import About from './components/About';
import Users from './components/Users';
import Home from './components/Home';
import './app.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
	<Router>
		<div className={'container'}>
			<Header />
			<div className={'main-wr'}>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/users" component={Users} />
			</div>
		</div>
	</Router>,
  document.getElementById('root')
);
