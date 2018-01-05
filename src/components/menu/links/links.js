import React from 'react';
import './links.scss';

class Links extends React.Component {
	render() {
		return (
			<a
				href={ this.props.url  }
				className='menu__bar__links__item'
				onClick={ () => this.props.toggleSlider() }
			>
				<li>
					<span className={ this.props.icon }></span>
					<span className='menu__bar__links__item__text'>{ this.props.text }</span>
				</li>
			</a>
		)
	}
}

export default Links;
