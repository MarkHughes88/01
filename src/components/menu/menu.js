import React from 'react';
import './menu.scss';

import Data from '../../data/menu.json';
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
		console.log(this.state)
	}

	render() {
		var Links = Data.Links.map(link => {
			return (
				<Link
					key={ link.id }
					icon={ link.icon }
					text={ link.text }
					url={ link.url }
				/>
			)
		});

		return (
			<div className='menu'>
				<ul className='menu__links'>
					{ Links }
				</ul>
			</div>
		)
	}
}

export default Menu;
