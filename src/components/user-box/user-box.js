import React from 'react';
import './user-box.scss';

import UserDetails from './user-details/user-details';
import Logout from './logout/logout';

class UserBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logout: true
		}
	}

	toggleLogout() {
		this.setState({
			logout: !this.state.logout
		})

		console.log(this.state.logout)
	}

	renderSwitch() {
		switch(this.state.logout) {
			case true:
				return <UserDetails
					activeUserName={ this.props.activeUserName }
					activeUserRole={ this.props.activeUserRole }
					activeUserEmail={ this.props.activeUserEmail }
					toggleLogout={ () => this.toggleLogout() }
				/>;
			case false:
				return <Logout
					toggleLogout={ () => this.toggleLogout() }
				/>
		}
	}

	render() {
		return (
			<div className={`user-box ${ this.props.userBoxActive ? 'user-box--active' : null }`}>
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
					{ this.renderSwitch(this.state.logout) }
				</div>
			</div>
		)
	}
}

export default UserBox;
