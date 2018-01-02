import React from 'react';
import './menu.scss';

import Data from '../../data/menu.json';
import Link from './links/links';

class Menu extends React.Component {
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
