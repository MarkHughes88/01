import React from 'react';

class Home extends React.Component {
	render () {
		return (
			<div className='container-fluid'>
				<div className='row pages__header'>
					<div className='container-fluid'>
						<h1>Home</h1>
					</div>
				</div>
				<div className='row pages__content'>
					<div className="border container">
					  <div className="border row justify-content-md-center">
					    <div className="border col col-lg-2">
					      1 of 3
					    </div>
					    <div className="border col-12 col-md-auto">
					      Variable width content
					    </div>
					    <div className="border col col-lg-2">
					      3 of 3
					    </div>
					  </div>
					  <div className="border row">
					    <div className="border col">
					      1 of 3
					    </div>
					    <div className="border col-12 col-md-auto">
					      Variable width content
					    </div>
					    <div className="border col col-lg-2">
					      3 of 3
					    </div>
					  </div>
					</div>

				</div>
			</div>
		)
	}
}

export default Home;
