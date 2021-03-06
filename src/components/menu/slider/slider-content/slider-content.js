import React from 'react';

class SliderContent extends React.Component {
	render() {
		return (
			<div>
					<div className='row'>
						<div className='container-fluid menu__slider__header'>
							<h2>Content</h2>
								<span
									className='fa fa-window-close slider__header__close'
									onClick={ this.props.closeSlider }
								></span>
						</div>
					</div>
					<div className='row'>
						<div className='menu__slider__content container-fluid'>

						</div>
					</div>
			</div>
		)
	}
}

export default SliderContent;
