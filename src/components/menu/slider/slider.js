import React from 'react';
import './slider.scss';

import Content from './content/content';
import Media from './media/media';
import Users from './users/users';

class Slider extends React.Component {
	render() {
		let content = null;
		switch(content) {
			case 'Content':
				return <Content />;
			case 'Media':
				return <Media />;
			case 'Users':
				return <Users />;
		}

		return (
			<div className='menu__slider__content'>
				{ this.props.content }
			</div>
		)
	}
}

export default Slider;
