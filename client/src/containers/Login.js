import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, loadUser, loadUserGames } from '../actions/users';
import '../styles/form.css';

import { Button } from 'react-bootstrap';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			error: ''
		}
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value})
	}


	handleSubmit = (e) => {
		e.preventDefault();
		this.props.login(this.state)
		.then(user => {
			if(!user.error) {
				this.props.loadUser(user);
				this.props.loadUserGames(user.id);
				//Redirect to Profile Page!
				this.props.history.push(`/users/${this.props.user.id}`);
			} else { this.setState({ error: user.error}) }
		});
	}

	render () {
		const { formData, user } = this.props;

		return (
			<div className="row">
				<div className="col-md-12 loginForm">
					<form onSubmit={this.handleSubmit}>
							<div className="username">
								<label>Username:&nbsp;</label>
								<input type="text" name="username" value={formData.username} 
								  onChange={this.handleChange} />
							</div>
							<div className="password">
								<label>Password:&nbsp;</label>
								<input type="password" name="password" value={formData.password} 
								onChange={this.handleChange} />
							</div>
							<div>
								<Button bsStyle="info" type="submit">Login</Button>
							</div>
							<div className="errors">
								{this.state.error}
							</div>
					</form>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		formData: state.formData,
		user: state.currentUser,
		questions: state.questions
	}
}

export default connect(mapStateToProps, { login, loadUser, loadUserGames })(Login);