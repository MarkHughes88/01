import React from 'react';

class UserDetails extends React.Component {
	render() {
		var activeUser = this.props.users[this.props.activeUser]

		return (
			<div className='row'>
				<div className='container-fluid user-box__content'>
					<div className='row'>
						<div className='container-fluid text-center'>
							<span className='user-box__content__icon rounded-circle'></span>
							<h3>Welcome { activeUser.username }</h3>
						</div>
					</div>
					<div className='row justify-content-sm-center'>
						<div className='col-sm-9 user-box__content__details'>
							<dl className='row'>
								<dt className='col-sm-5'>
									Username:
								</dt>
								<dd className='col-sm-7'>
									{ activeUser.username }
								</dd>
								<dt className='col-sm-5'>
									Role:
								</dt>
								<dd className='col-sm-7'>
									{ activeUser.role }
								</dd>
								<dt className='col-sm-5'>
									Email:
								</dt>
								<dd className='col-sm-7'>
									{ activeUser.email }
								</dd>
							</dl>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-6'>
							<span
								className='btn button button-primary btn-block'
								onClick={ () => {
										this.props.editUser(activeUser.id);
										this.props.changePage('Users');
									}
								}
							>Edit details</span>
						</div>
						<div className='col-sm-6'>
							<button
								className='btn button button-secondary btn-block'
								onClick={ this.props.toggleLogout }
							>Log out</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default UserDetails;
