import React from 'react';
import './users.scss';

class Users extends React.Component {

	render() {
		return (
			<div className='row'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='container-fluid menu__slider__header'>
							<h2>Users</h2>
								<span
									className='fa fa-window-close slider__header__close'
									onClick={ this.props.closeSlider }
								></span>
						</div>
					</div>
					<div className='row'>
						<div className='menu__slider__content container-fluid'>
							<ul className='user-list'>

								<li className='user-list__title'>Administrators</li>
								{this.props.users.map(function(user, id, username, role) {
									if (user.role === 'Administrator') {
										return <li key={ user.id } className='user-list__item'>
											<span className='fa fa-user'></span> &nbsp;
											<span
												className='user-list__item__name'
												onClick={ () => {
														this.props.selectedUser(user.id);
														this.props.changePage('Users');
													}
												}
											>{ user.username }</span>
											<span className='user-list__item__buttons'>
											<span
												className='fa fa-pencil user-list__item__buttons__edit'
												onClick={ () => {
														this.props.selectedUser(user.id);
														this.props.changePage('Users');
													}
												}
											></span>
											&nbsp;
											<span className='fa fa-trash'></span>
											</span>
										</li>
									}
									return false;
								}, this)}

								<li className='user-list__title'>Editors</li>
								{this.props.users.map(function(user, id, username, role) {
									if (user.role === 'Editor') {
										return <li key={ user.id } className='user-list__item'>
											<span className='fa fa-user'></span> &nbsp;
												<span
													className='user-list__item__name'
													onClick={ () => {
															this.props.selectedUser(user.id);
															this.props.changePage('Users');
														}
													}
												>{ user.username }</span>
											<span className='user-list__item__buttons'>
												<span
													className='fa fa-pencil user-list__item__buttons__edit'
													onClick={ () => {
															this.props.selectedUser(user.id);
															this.props.changePage('Users');
														}
													}
												></span>
												&nbsp;
												<span className='fa fa-trash'></span>
											</span>
										</li>
									}
									return false;
								}, this)}

								<li className='user-list__title'>Users</li>
								{this.props.users.map(function(user, id, username, role) {
									if (user.role === 'User') {
										return <li key={ user.id } className='user-list__item'>
											<span className='fa fa-user'></span> &nbsp;
												<span
													className='user-list__item__name'
													onClick={ () => {
															this.props.selectedUser(user.id);
															this.props.changePage('Users');
														}
													}
												>{ user.username }</span>
											<span className='user-list__item__buttons'>
												<span
													className='fa fa-pencil user-list__item__buttons__edit'
													onClick={ () => {
															this.props.selectedUser(user.id);
															this.props.changePage('Users');
														}
													}
												></span>
												&nbsp;
												<span className='fa fa-trash'></span>
											</span>
										</li>
									}
									return false;
								}, this)}

							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Users;
