import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Header = () => (
  <header>
		<nav className={'navbar navbar-expand-lg navbar-light bg-light'}>
			<a className={'navbar-brand'} href="/">React Test</a>
			<div className={'collapse navbar-collapse'} id="navbarNav">
				<ul className={'navbar-nav'}>
					<li className={'nav-item'}>
						<Link className={'nav-link'} to="/">Home</Link>
					</li>
					<li className={'nav-item'}>
						<Link className={'nav-link'} to="/about-us">About</Link>
					</li>
					<li className={'nav-item'}>
						<Link className={'nav-link'} to="/login">Authorization</Link>
					</li>
				</ul>
			</div>
		</nav>
	</header>
)

export default connect(
	state => ({
		isLogin: state.isLogin
	})
)(Header)
