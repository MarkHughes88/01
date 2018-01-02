import React from 'react';
import './links.scss';

class Links extends React.Component {
	render() {
		return (
			<a href={ this.props.url }>
				<li className='menu__links__item'>
					<span className={ this.props.icon }></span>
					{ this.props.text }
				</li>
			</a>
		)
	}
}

export default Links;
