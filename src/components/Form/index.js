import React, { Component } from 'react';

class Form extends Component {
	render() {
		const { title } = this.props;
		return (
			<div className="form-wr">
			<h3>{title}</h3>
				<form onSubmit={this.props.Submit}>
					<div class="form-group">
						<input type="email" class="form-control" placeholder="Enter email" ref={(input) => { this.Login = input; }} />
					</div>
					<div class="form-group">
						<input type="password" class="form-control" placeholder="Password" ref={(input) => { this.Pass = input; }}/>
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

export default Form
