import React from 'react';

class Users extends React.Component {
	render() {
		return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='container-fluid'>
						<h1>User Name</h1>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6'>
						<form>

						  <div className="form-group">
								<div className='row'>
									<div className='col-sm-4 text-right'>
										<label htmlFor="name">Name</label>
									</div>
									<div className='col-sm-8'>
										<input type="text" className="form-control" id="name" />
									</div>
								</div>
						  </div>

							<div className="form-group">
								<div className='row'>
									<div className='col-sm-4 text-right'>
										<label htmlFor="userName">Username</label>
									</div>
									<div className='col-sm-8'>
										<input type="text" className="form-control" id="userName" />
									</div>
								</div>
						  </div>

							<div className="form-group">
								<div className='row'>
									<div className='col-sm-4 text-right'>
										<label htmlFor="email">Email</label>
									</div>
									<div className='col-sm-8'>
										<input type="email" className="form-control" id="email" />
									</div>
								</div>
						  </div>

							<div className="form-group">
								<div className='row'>
									<div className='col-sm-4 text-right'>
										<label htmlFor='role'>Role</label>
									</div>
									<div className='col-sm-8'>
										<select className="form-control" id="role">
								      <option>Admin</option>
								      <option>Editor</option>
								      <option>User</option>
								    </select>
									</div>
								</div>
						  </div>

						</form>
					</div>
				</div>
			</div>
		)
	}
 }

 export default Users;
