import React from 'react';
import './login.scss';

import Quotes from '../../data/quotes.json';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputUsername: undefined,
			inputPassword: undefined,
			quote: {
				author: undefined,
				quote: undefined
			}
		}
	}

	componentWillMount() {
		this.displayQuote();
	}

	changeUsername(value) {
		this.setState({
			inputUsername: value
		})
	}

	changePassword(value) {
		this.setState({
			inputPassword: value
		})
	}

	displayQuote() {
		var quotes = Quotes.Quotes.map(Quote => {
			return {
				Author: Quote.Author,
				Quote: Quote.Quote
			}
		})
		var quote = quotes[Math.floor(Math.random() * quotes.length)];

		this.setState({
			quote: {
				author: quote.Author,
				quote: quote.Quote
			}
		})
	}

	render() {
		return(
			<div className='login-wrapper'>
				<div className='login-wrapper__login-container'>
					<div className='login-wrapper__login-container__login-box'>
						<div className='row'>
							<div className='container-fluid text-center'>
								<h1 className='login-wrapper__login-container__login-box__title'>Please login</h1>
									{ this.props.failed === true ?
									<p>Username or password was incorrect. Please try again</p>
									: null }
							</div>
						</div>
						<form>
							<div className='row'>
								<div className='container-fluid'>
									<form-group>
										<label htmlFor='username'>Username</label>
										<input
											type='text'
											id='username'
											className='form-control'
											placeholder='Enter your username'
											onChange={
												(e) => this.changeUsername(e.target.value)
											}
										/>
									</form-group>
									<br/>
									<form-group>
										<label htmlFor='password'>Password</label>
										<input
											type='password'
											id='password'
											className='form-control'
											placeholder='Enter your username'
											onChange={
												(e) => this.changePassword(e.target.value)
											}
										/>
									</form-group>
									<br/>
								</div>
							</div>
							<div className='row login-wrapper__login-container__login-box__button-container'>
								<div className='col-sm-6'>
									<button
										className='btn button button-primary'
										onClick={
											(username, password) => this.props.isLoggedIn(this.state.inputUsername, this.state.inputPassword)
										}
									>Login</button>
								</div>
								<div className='col-sm-6 text-right login-wrapper__login-container__login-box__forgot-password'>
									<a>Forgotten your password?</a>
								</div>
							</div>
						</form>
					</div>
					<div className='login-wrapper__login-container__login-box__quote'>
						<p><span className='login-wrapper__login-container__login-box__quote__quote'>"{ this.state.quote.quote }"</span><br />
						<span>- { this.state.quote.author }</span></p>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;
