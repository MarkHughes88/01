import React from 'react';
import './user-box.scss';

class UserBox extends React.Component {
	render() {
		return (
			<div
				className={`user-box ${this.props.userBoxActive ? 'user-box--active' : null }`}
			>
				<div className='container-fluid'>
					<div className='row'>
						<div className='container-fluid user-box__header'>
							<h2 className='user-box__header__title'>Logged in User</h2>
							<span
								className='fa fa-window-close user-box__header__close'
								onClick={ this.props.userBoxState }
							></span>
						</div>
					</div>
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
									<h4>User details</h4>
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
									<button className='btn button button-primary btn-block'>Edit details</button>
								</div>
								<div className='col-sm-6'>
									<button className='btn button button-secondary btn-block'>Log out</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default UserBox;
