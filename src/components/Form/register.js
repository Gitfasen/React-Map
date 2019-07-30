import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Register extends Component {
	
	state = {
		user: {
				firstName: '',
				lastName: '',
				username: '',
				password: ''
		},
		submitted: false
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		const { user } = this.state;
		this.setState({
			user: {
				...user,
				[name]: value
			}
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({submitted: true});
		const { user } = this.state;
		if (user.firstName && user.lastName && user.username && user.password) {
			this.setState({
				user: {
					firstName: '',
					lastName: '',
					username: '',
					password: ''
				},
				submitted: false
			});
		}
	}
	
	render() {
		const { user, submitted } = this.state;
		return (
			<div className="form-wr">
				<form name="form" onSubmit={this.handleSubmit}>
					<div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
						<label htmlFor="firstName">First Name</label>
						<input 
							type="text" 
							className="form-control" 
							name="firstName" 
							value={user.firstName} 
							onChange={this.handleChange} />
					</div>
					<div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
						<label htmlFor="lastName">Last Name</label>
						<input 
							type="text" 
							className="form-control" 
							name="lastName" 
							value={user.lastName} 
							onChange={this.handleChange} />
					</div>
					<div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
						<label htmlFor="username">Username</label>
						<input 
							type="text" 
							className="form-control" 
							name="username" 
							value={user.username} 
							onChange={this.handleChange} />
					</div>
					<div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
						<label htmlFor="password">Password</label>
						<input 
							type="password" 
							className="form-control" 
							name="password" 
							value={user.password} 
							onChange={this.handleChange} />
					</div>
					<div className="form-group">
						<button className="btn btn-primary">Register</button>
						<Link to="/login" className="btn btn-link">Cancel</Link>
					</div>
			</form>
			</div>
		);
	}
}

export default Register
