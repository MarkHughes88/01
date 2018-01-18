import React from 'react';
import './login.scss';

class Login extends React.Component {
	render() {
		return(
			<div className='login-container'>
				<div className='login-container__login-box'>
					<div className='row'>
						<div className='container-fluid text-center'>
							<h1>Please login</h1>
						</div>
					</div>
					<form>
						<div className='row'>
							<div className='container-fluid'>
								<form-group>
									<label htmlFor='username'>Username:</label>
									<input type='text' id='username' className='form-control' placeholder='Enter your username' />
								</form-group>
								<br/>
								<form-group>
									<label htmlFor='password'>Password:</label>
									<input type='password' id='password' className='form-control' placeholder='Enter your username' />
								</form-group>
								<br/>
							</div>
						</div>
						<div className='row login-container__login-box__button-container'>
							<div className='col-sm-6'>
								<button className='btn btn-block button button-primary'>Login</button>
							</div>
							<div className='col-sm-6 text-right'>
								<a href='#'>Forgotten your password?</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default Login;
