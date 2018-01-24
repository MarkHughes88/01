import React from 'react';
import './pages-home.scss';
import Article from './pages-home-article/pages-home-article';
import Data from '../../../data/home-articles.json';

class PagesHome extends React.Component {
	render() {
		var Articles = Data.Articles.map(article => {
			return (
				<Article
					key={ article.id }
					id={ article.id }
					title={ article.title }
					content={ article.content }
					image={ article.image }
				/>
			)
		});

		return (
			<div>

				<div className='row pages__header'>
					<div className='container-fluid'>
						<h1 className='pages__header__title'>Home</h1>
					</div>
				</div>

				<div className='row pages__content'>
					<div className="container-fluid">
					  <div className="row justify-content-md-center">
							<div className='col-md-8 text-center'>

								<div className='row'>
									<div className='container-fluid'>
										<h2 style={{margin: '0px'}}>Welcome to my dummy react-app CMS</h2>
										<h3>Howdy! (｡◕‿‿◕｡) This is a dummy react project built by Mark Hughes!</h3>
										<br></br>
									</div>
								</div>

								{ Articles }

							</div>
					  </div>
					</div>
				</div>

			</div>
		)
	}
}

export default PagesHome;
