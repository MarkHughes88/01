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
				active: false
			}
		}
	}

	toggleSlider() {
		/* this.setState({
			this.state.active: !this.state.active
		}); */
	}

	render() {
		var Links = Data.Links.map(link => {
			return (
				<Link
					key={ link.id }
					icon={ link.icon }
					text={ link.text }
					url={ link.url }
					toggleSlider={ () => this.toggleSlider() }
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
				<Slider />
			</div>
		)
	}
}

export default Menu;
