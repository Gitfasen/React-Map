import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'


class Menu extends Component {
  render() {
    return (
			<Navbar bg="light" expand="lg">
				<Link to="/"><Navbar.Brand>DO-IT Test</Navbar.Brand></Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link to="/" className={'nav-link'}>Home</Link>
						<Link to="/about/" className={'nav-link'}>About</Link>
						<Link to="/users/" className={'nav-link'}>Users</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
  }
}

export default Menu;


