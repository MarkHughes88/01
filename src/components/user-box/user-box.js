import React from 'react';
import './user-box.scss';

class UserBox extends React.Component {
	render() {
		return (
			<div className={`user-box ${this.props.userBoxActive ? 'user-box--active' : null }`}>
				<div className='container-fluid'>
					<div className='row'>
						<div className='container-fluid user-box__header'>
							<h2>User Details</h2>
						</div>
					</div>
					<div className='row'>
						<div className='container-fluid user-box__content text-center'>
							<span className='user-box__content__icon rounded-circle'></span>
							<h3>Welcome User</h3>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default UserBox;
