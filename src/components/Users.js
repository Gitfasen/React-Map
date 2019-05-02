import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import Form from './Form'

class Users extends Component {
  render() {
    return (
			<div>
				<Row>
					<Col><Form title="Login"/></Col>
					<Col><Form title="Registration"/></Col>
				</Row>
			</div>
		
		);
  }
}

export default Users;