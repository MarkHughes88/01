import React from 'react';
import './pages.scss';
/* import { BrowserRouter as Router, Route } from 'react-router-dom'; */

import Home from './pages-home/pages-home';
import Content from './pages-content/pages-content';
import Media from './pages-media/pages-media';
import Users from './pages-users/pages-users';
import Help from './pages-help/pages-help';

class Pages extends React.Component {
	renderPageSwitch(page) {
		switch (page) {
			case 'Home':
				return <Home
						activeUser={ this.props.activeUser }
						users={ this.props.users }
					/>
			case 'Content':
				return <Content />
			case 'Media':
				return <Media />
			case 'Users':
				return <Users
						selectedUser={ this.props.selectedUser }
						users={ this.props.users }
					/>
			case 'Help':
				return <Help />
			default:
				return <Home
						activeUser={ this.props.activeUser }
						users={ this.props.users }
					/>;
		}
	}

	render() {
		return (
			/** <Router>
				<div className={`pages ${this.props.sliderActive ? 'pages--margin' : null }`}>
					<Route exact path='/' component={ () => <Home /> } />
					<Route exact path='/content' component={ () => <Content /> } />
					<Route exact path='/media' component={ () => <Media /> } />
					<Route exact path='/users' component={ () => <Users /> } />
					<Route exact path='/help' component={ () => <Help /> } />
				</div>
			</Router> **/
			<div className={`container-fluid pages ${this.props.sliderActive ? 'pages--margin' : null }`}>
				{ this.renderPageSwitch(this.props.pageState) }
			</div>
		)
	}
}

export default Pages;
