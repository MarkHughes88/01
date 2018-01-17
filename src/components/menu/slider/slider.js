import React from 'react';
import './slider.scss';

import Content from './content/content';
import Media from './media/media';
import Users from './users/users';

class Slider extends React.Component {
	renderSwitch(content) {
		switch(content) {
			case 'Content':
				return <Content />;
			case 'Media':
				return <Media />;
			case 'Users':
				return <Users
					users={ this.props.users }
					selectedUser={ this.props.selectedUser }
					pageState={ this.props.pageState }
					changePage={ this.props.changePage }
				/>;
			default:
				return null;
		}
	}

	render() {
		return (
			<div className='container-fluid'>
				{ this.renderSwitch(this.props.content) }
			</div>
		)
	}
}

export default Slider;
