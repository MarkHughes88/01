import React from 'react';
import './links.scss';

class Links extends React.Component {
	onClick = () => {
		this.props.toggleSlider(this.props.text);
		this.props.changePage(this.props.text);
	}

	render() {
		return (
			<a
				href={ this.props.text === 'Home' || this.props.text === 'Help' ?  this.props.url : null }
				className='menu__bar__links__item'
				onClick={this.onClick}
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
