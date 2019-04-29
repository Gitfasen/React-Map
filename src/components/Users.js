import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import Form from './Form'

class Users extends Component {
  render() {
    return (
			<div>
				<h1 className={'title'}>Login</h1>
				<Row>
					<Col></Col>
					<Col><Form/></Col>
					<Col></Col>
				</Row>
			</div>
		
		);
  }
}

export default Users;