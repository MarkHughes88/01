import React from 'react';
import './menu-user.scss';

class MenuUser extends React.Component {
	render() {
		return (
			<div className='menu__user'>
				<a onClick={ this.props.userBoxState }>
					<span className='menu__user__icon rounded-circle' style={{
							backgroundImage: `url(${ this.props.activeUserImage })`
						}}></span>
				</a>
			</div>
		)
	}
}

export default MenuUser;
