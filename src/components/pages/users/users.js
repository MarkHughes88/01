import React from 'react';
import './users.scss';

class Users extends React.Component {
	render() {
		let user = this.props.users[this.props.selectedUser]
		return (
			<div className='container-fluid'>
				<div className='row pages__header'>
					<div className='container-fluid'>
						<h1>User Details</h1>
					</div>
				</div>
				<div className='row pages__content'>
					<div className='container-fluid'>
						<div className='row justify-content-md-center'>
							<div className='col-md-8 user-details'>
								<form>
							 	 <div className='row m-0'>
							 		 <div className='col-md-8'>

							 			 <div className="form-group">
							 				 <div className='row'>
							 					 <div className='col-sm-4 text-right'>
							 						 <label htmlFor="name">Name</label>
							 					 </div>
							 					 <div className='col-sm-8'>
							 						 <input type="text" className="form-control" id="name" placeholder={ user.name }/>
							 					 </div>
							 				 </div>
							 			 </div>

							 			 <div className="form-group">
							 				 <div className='row'>
							 					 <div className='col-sm-4 text-right'>
							 						 <label htmlFor="userName">Username</label>
							 					 </div>
							 					 <div className='col-sm-8'>
							 						 <input type="text" className="form-control" id="userName" placeholder={ user.username } />
							 					 </div>
							 				 </div>
							 			 </div>

							 			 <div className="form-group">
							 				 <div className='row'>
							 					 <div className='col-sm-4 text-right'>
							 						 <label htmlFor="email">Email</label>
							 					 </div>
							 					 <div className='col-sm-8'>
							 						 <input type="email" className="form-control" id="email" placeholder={ user.email } />
							 					 </div>
							 				 </div>
							 			 </div>

							 			 <div className="form-group">
							 				 <div className='row'>
							 					 <div className='col-sm-4 text-right'>
							 						 <label htmlFor='role'>Role</label>
							 					 </div>
							 					 <div className='col-sm-8'>
							 						 <select className="form-control" id="role" value={ user.role } onChange={() => {}}>
							 							 <option>Admin</option>
							 							 <option>Editor</option>
							 							 <option>User</option>
							 						 </select>
							 					 </div>
							 				 </div>
							 			 </div>

							 		 </div>
							 		 <div className='col-md-4 text-center image-container'>
							 			 <div class='image-container__image'>
							 				 <span className='image-container__image__background rounded-circle' style={{
							 						 backgroundImage: `url(${ user.image })`
							 					 }}></span>
											 <span className='image-container__image__link'>Change Image</span>
							 			 </div>
							 		 </div>
							 	 </div>
							 	 <div className='row'>
							 		 <div className='container-fluid'>
							 			 <div className='row'>
							 				 <div className='container-fluid text-right'>
							 					 <a className='btn button button-primary'>Save Changes</a>
							 				 </div>
							 			 </div>
							 		 </div>
							 	 </div>
							  </form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
 }

 export default Users;
/**
 <form>
	 <div className='row user-details__content'>
		 <div className='col-md-8'>

			 <div className="form-group">
				 <div className='row'>
					 <div className='col-sm-4 text-right'>
						 <label htmlFor="name">Name</label>
					 </div>
					 <div className='col-sm-8'>
						 <input type="text" className="form-control" id="name" placeholder={ user.name }/>
					 </div>
				 </div>
			 </div>

			 <div className="form-group">
				 <div className='row'>
					 <div className='col-sm-4 text-right'>
						 <label htmlFor="userName">Username</label>
					 </div>
					 <div className='col-sm-8'>
						 <input type="text" className="form-control" id="userName" placeholder={ user.username } />
					 </div>
				 </div>
			 </div>

			 <div className="form-group">
				 <div className='row'>
					 <div className='col-sm-4 text-right'>
						 <label htmlFor="email">Email</label>
					 </div>
					 <div className='col-sm-8'>
						 <input type="email" className="form-control" id="email" placeholder={ user.email } />
					 </div>
				 </div>
			 </div>

			 <div className="form-group">
				 <div className='row'>
					 <div className='col-sm-4 text-right'>
						 <label htmlFor='role'>Role</label>
					 </div>
					 <div className='col-sm-8'>
						 <select className="form-control" id="role" value={ user.role } onChange={() => {}}>
							 <option>Admin</option>
							 <option>Editor</option>
							 <option>User</option>
						 </select>
					 </div>
				 </div>
			 </div>

		 </div>
		 <div className='col-md-4 text-center image-container'>
			 <div class='image-container__image'>
				 <div className='image-container__image__background rounded-circle' style={{
						 backgroundImage: `url(${ user.image })`
					 }}></div>
			 </div>
		 </div>
	 </div>
	 <div className='row'>
		 <div className='container-fluid'>
			 <div className='row'>
				 <div className='container-fluid text-right'>
					 <a className='btn button button-primary'>Save Changes</a>
				 </div>
			 </div>
		 </div>
	 </div>
 </form>

 **/
