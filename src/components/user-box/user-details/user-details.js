import React from 'react';

class UserDetails extends React.Component {
	render() {
		return (
			<div className='row'>
				<div className='container-fluid user-box__content'>
					<div className='row'>
						<div className='container-fluid text-center'>
							<span className='user-box__content__icon rounded-circle'></span>
							<h3>Welcome { this.props.activeUserName }</h3>
						</div>
					</div>
					<div className='row justify-content-sm-center'>
						<div className='col-sm-9 user-box__content__details'>
							<dl className='row'>
								<dt className='col-sm-5'>
									Username:
								</dt>
								<dd className='col-sm-7'>
									{ this.props.activeUserName }
								</dd>
								<dt className='col-sm-5'>
									Role:
								</dt>
								<dd className='col-sm-7'>
									{ this.props.activeUserRole }
								</dd>
								<dt className='col-sm-5'>
									Email:
								</dt>
								<dd className='col-sm-7'>
									{ this.props.activeUserEmail }
								</dd>
							</dl>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-6'>
							<a
								className='btn button button-primary btn-block'
								onClick={ () => {
										this.props.changePage('Users');
									}
								}
							>Edit details</a>
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
