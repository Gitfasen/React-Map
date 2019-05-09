import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
	render() {
		return (
			<div className="form-wr">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input type="email" className="form-control" placeholder="Enter email" />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" placeholder="Password" />
					</div>
					<button type="submit" className="btn btn-primary">Login</button>
					<Link className={'btn'} to="/Login/Register">Register</Link>
				</form>
			</div>
		);
	}
}

export default Login
