import React from 'react';
import './user.scss';

class User extends React.Component {
	render() {
		return (
			<div className='menu__user'>
				<a onClick={ this.props.userBoxState }>
					<span className='menu__user__icon rounded-circle'></span>
				</a>
			</div>
		)
	}
}

export default User;
