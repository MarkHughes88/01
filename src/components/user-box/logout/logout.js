import React from 'react';

class Logout extends React.Component {
	render() {
		return (
			<div className='row'>
				<div className='container-fluid user-box__content'>
					<div className='row'>
						<div className='container-fluid'>
							<h3 className='text-center'>Are you sure you want to logout?</h3>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-6'>
							<button
								className='btn button button-primary btn-block'
								onClick={ this.props.logout }
							>Yes</button>
						</div>
						<div className='col-sm-6'>
							<button
								className='btn button button-secondary btn-block'
								onClick={ this.props.toggleLogout }
							>No</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Logout;
