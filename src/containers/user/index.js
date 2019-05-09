import React from 'react'
import Form from '../../components/Form'

const User = () => (
  <div>
    <h1 className="text-center title">Authorization Page</h1>
		<div className="row">
			<div className="col-6"><Form title="Login"/></div>
			<div className="col-6"><Form title="Registration"/></div>
		</div>
		
  </div>
)

export default User
