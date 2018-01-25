import React from 'react';
import './pages-home.scss';
import Article from './pages-home-article/pages-home-article';
import Data from '../../../data/home.json';

class PagesHome extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				title: undefined,
				subtitle: undefined,
				data: {
					content: undefined,
					Articles: undefined
				}
			}
	}

	componentWillMount() {
		this.renderContent();
	}

	componentDidMount() {

	}

	renderContent() {
		var content = Data.Home.map(Content => {
			return {
				content: Content.Content,
				articles: Content.Articles
			}
		});

		console.log(content.content)

		this.setState({
			data: {
				content: content.content,
				articles: content.articles
			}
		})
	}

	/** displayContent() {
		var content = Data.Home.Content.map(Content => {
			return {
				title: Content.title,
				subtitle: Content.subtitle
			}
		});

		this.setState({
			title: content.title,
			subtitle: content.subtitle
		})
	}
**/
	render() {
		/** var Articles = Data.Home.Articles.map(article => {
			return (
				<Article
					key={ article.id }
					id={ article.id }
					title={ article.title }
					content={ article.content }
					image={ article.image }
				/>
			)
		}); **/

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



							</div>
					  </div>
					</div>
				</div>

			</div>
		)
	}
}

export default PagesHome;
