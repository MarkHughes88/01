import React from 'react';
import './slider.scss';

import Content from './slider-content/slider-content';
import Media from './slider-media/slider-media';
import Users from './slider-users/slider-users';

class Slider extends React.Component {
	renderSwitch(content) {
		switch(content) {
			case 'Content':
				return <Content
						closeSlider={ this.props.closeSlider }
					/>;
			case 'Media':
				return <Media
						closeSlider={ this.props.closeSlider }
					/>;
			case 'Users':
				return <Users
					users={ this.props.users }
					selectedUser={ this.props.selectedUser }
					pageState={ this.props.pageState }
					changePage={ this.props.changePage }
					closeSlider={ this.props.closeSlider }
				/>;
			default:
				return null;
		}
	}

	render() {
		return (
			<div>
				{ this.renderSwitch(this.props.content) }
			</div>
		)
	}
}

export default Slider;
