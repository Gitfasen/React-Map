import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';


class Header extends Component {
  render() {
		let userUrl      = '/users/';
		let userUrlTitle = 'Users';
		if (this.props.isLogin) {
			userUrl      = '/';
			userUrlTitle = 'Logout';
		}
    return (
			<Navbar bg="light" expand="lg">
				<Link to="/"><Navbar.Brand>DO-IT Test</Navbar.Brand></Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link to="/" className={'nav-link'}>Home</Link>
						<Link to="/about/" className={'nav-link'}>About</Link>
						<Link to={userUrl} className={'nav-link'}>{userUrlTitle}</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
  }
}

export default connect(
	state => ({
		isLogin: state.isLogin
	}),
	dispatch => ({})
)(Header);


