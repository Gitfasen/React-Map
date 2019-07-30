import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
	
	state = {
		username: '',
		password: '',
		submitted: false
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit = (e) => {
			e.preventDefault();

			this.setState({ submitted: true });
			const { username, password } = this.state;
			if (username && password) {
					console.log('Login ---' + username, 'Pass ---' + password);
					this.setState({ username: '',	password: '', submitted: false });
			}
	}
	render() {
		const { username, password, submitted } = this.state;
		return (
			<div className="form-wr">
				<form name="form" onSubmit={this.handleSubmit}>
					<div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
							<label htmlFor="username">Username</label>
							<input 
								type="text" 
								className="form-control" 
								name="username" 
								value={username} 
								onChange={this.handleChange} />
					</div>
					<div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
							<label htmlFor="password">Password</label>
							<input 
								type="password" 
								className="form-control" 
								name="password" 
								value={password} 
								onChange={this.handleChange} />
					</div>
					<div className="form-group">
							<button className="btn btn-primary">Login</button>
							<Link to="/login/register" className="btn btn-link">Register</Link>
					</div>
			</form>
			</div>
		);
	}
}

export default Login
