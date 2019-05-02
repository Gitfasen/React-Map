import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

class FormComponent extends Component {
  render() {
    return (
			<div>
				<h2>{this.props.title}</h2>
				<Form>
					<Form.Group >
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group>
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
			
		);
  }
}

export default FormComponent;