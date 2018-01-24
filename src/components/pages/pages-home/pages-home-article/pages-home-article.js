import React from 'react';

class PagesHomeArticle extends React.Component {
	render() {
		return(
			<div>
				{ this.props.id % 2 === 0 ?
					<div className='row'>
						<div className='dummy-content container-fluid'>
							<div className='row'>
								<div className='col-sm-6 dummy-content__image' style={{backgroundImage: `url(${ this.props.image })`}}></div>
								<div className='col-sm-6 dummy-content__text'>
									<h3>{ this.props.title }</h3>
									<p>
										{ this.props.content }
									</p>
								</div>
							</div>
						</div>
					</div>
				:
					<div className='row'>
						<div className='dummy-content container-fluid'>
							<div className='row'>
								<div className='col-sm-6 dummy-content__text'>
									<h3>{ this.props.title }</h3>
									<p>
										{ this.props.content }
									</p>
								</div>
								<div className='col-sm-6 dummy-content__image' style={{backgroundImage: `url(${ this.props.image })`}}></div>
							</div>
						</div>
					</div>
			 	}
			</div>
		)
	}
}

export default PagesHomeArticle;
