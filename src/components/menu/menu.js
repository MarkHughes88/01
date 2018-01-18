import React from 'react';

import './menu.scss';

import Data from '../../data/menu.json';
import User from './menu-user/menu-user';
import Link from './menu-links/menu-links';
import Slider from './slider/slider';

class Menu extends React.Component {
	toggleSlider(text) {
		let dontToggle = text === 'Home' || 'Help';

		dontToggle ? this.props.sliderState(
			!this.props.sliderActive || this.props.sliderContent !== text, text
		) : this.props.sliderState(false);

	}

	render() {
		var Links = Data.Links.map(link => {
			return (
				<Link
					key={ link.id }
					icon={ link.icon }
					text={ link.text }
					url={ link.url }
					toggleSlider={ (text) => this.toggleSlider(text) }
					changePage={ (page) => this.props.changePage(page) }
				/>
			)
		});

		return (
			<div className='menu'>
				<div className='menu__bar'>
					<User
						userBoxState={ this.props.userBoxState }
						users={ this.props.users }
						activeUser={ this.props.activeUser }
						activeUserImage={ this.props.activeUserImage }
					/>
					<ul className='menu__bar__links'>
						{ Links }
					</ul>
				</div>
				<div className={`container-fluid menu__slider ${this.props.sliderActive ? 'menu__slider--active' : null }`}>
					<Slider
						content={ this.props.sliderContent }
						users={ this.props.users }
						selectedUser={ this.props.selectedUser }
						pageState={ this.props.pageState }
						changePage={ this.props.changePage }
						closeSlider={ this.props.closeSlider }
					/>
				</div>
			</div>
		)
	}
}

export default Menu;
