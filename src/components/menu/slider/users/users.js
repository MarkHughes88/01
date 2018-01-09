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
						</div>
					</div>
					<div className='row'>
						<div className='menu__slider__content container-fluid'>
							<ul className='user-list'>
								{this.props.userNames.map(function(userName){
			            return <li className='user-list__item'>
										<span className='fa fa-user'></span> &nbsp;
										<span className='user-list__item__name'>{ userName }</span>
										<span className='user-list__item__buttons'>
											<span className='fa fa-pencil'></span> &nbsp;
											<span className='fa fa-trash'></span>
										</span>
									</li>;
			          })}
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Users;
