import React from 'react';
import './home.scss';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			images: [
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPxW29d-oCojn-pm3vf0XY8skYl9zSFttuO8endoPUyul0GQX',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv9AYwlCR8Dbx3ZGyxO_U1om1eh7x_9HzW1qaeZL_I01AgXtSopQ',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabJ08CzZCDSqLEqPkSfqBG0v96vQE-RJUmlI13IvtT5F9aTuM6Q'
			]
		}
	}

	render () {
		let activeUser = this.props.users[this.props.activeUser];

		return (
			<div>
				<div className='row pages__header'>
					<div className='container-fluid'>
						<h1>Home</h1>
					</div>
				</div>
				<div className='row pages__content'>
					<div className="container-fluid">
					  <div className="row justify-content-md-center">
							<div className='col-md-8 text-center'>
								<div className='row'>
									<div className='container-fluid'>
										<h1>Welcome to my dummy react-app CMS</h1>
										<h2>Howdy! (｡◕‿‿◕｡) This is a dummy react project built by Mark Hughes!</h2>
										<br></br>
									</div>
								</div>

								<div className='row'>
									<div className='dummy-content container-fluid'>
										<div className='row'>
											<div className='col-sm-6 dummy-content__image' style={{
													backgroundImage: `url(${ this.state.images[0] })`
												}}>
											</div>
											<div className='col-sm-6 dummy-content__text'>
												<h3>Lorem ipsum dolor sit amet</h3>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
													labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
													laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
													voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
													non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='dummy-content container-fluid'>
										<div className='row'>
											<div className='col-sm-6 dummy-content__text'>
												<h3>Sed ut perspiciatis unde omnis</h3>
												<p>
													Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
													totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
													dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
													sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
													est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
													modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
												</p>
											</div>
											<div className='col-sm-6 dummy-content__image' style={{
													backgroundImage: `url(${ this.state.images[1] })`
												}}>
											</div>
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='dummy-content container-fluid'>
										<div className='row'>
											<div className='col-sm-6 dummy-content__image' style={{
													backgroundImage: `url(${ this.state.images[2] })`
												}}>
											</div>
											<div className='col-sm-6 dummy-content__text'>
												<h3>Ut enim ad minima veniam</h3>
												<p>
													Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
													aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
													esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
												</p>
											</div>
										</div>
									</div>
								</div>

							</div>
					  </div>
					</div>

				</div>
			</div>
		)
	}
}

export default Home;
