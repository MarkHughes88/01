import React from 'react';

import './menu.scss';

import Data from '../../data/menu.json';
import User from './user/user';
import Link from './links/links';
import Slider from './slider/slider';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slider: {
				active: false,
				content: null
			}
		}
	}

	setSliderState(active, content) {
		this.setState({
	 	 active,
		 content
	  });
	}

	toggleSlider(text) {
		let dontToggle = text !== 'Home' || 'Help';

		dontToggle ? this.setSliderState(
			!this.state.active || this.state.content === text, text
		) : this.setSliderState(false);
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
				/>
			)
		});

		return (
			<div className='menu'>
				<div className='menu__bar'>
					<User />
					<ul className='menu__bar__links'>
						{ Links }
					</ul>
				</div>
				<div className={`menu__slider ${this.state.active ? 'menu__slider--active' : null }`}>
					<Slider />
				</div>
			</div>
		)
	}
}

export default Menu;
