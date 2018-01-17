import React from 'react';

import './menu.scss';

import Data from '../../data/menu.json';
import User from './user/user';
import Link from './links/links';
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
					/>
					<ul className='menu__bar__links'>
						{ Links }
					</ul>
				</div>
				<div className={`menu__slider ${this.props.sliderActive ? 'menu__slider--active' : null }`}>
					<Slider
						content={ this.props.sliderContent }
						users={ this.props.users }
						selectUser={ this.props.selectUser }
					/>
				</div>
			</div>
		)
	}
}

export default Menu;
