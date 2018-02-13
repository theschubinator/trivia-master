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
				this.props.history.push(`/users/${this.props.user.id}`);
			} else { this.setState({ error: user.error}) }
		});
	}

	render () {
		return (
			<div className="row">
				<div className="col-md-8 col-sm-12 form">
					<form onSubmit={this.handleSubmit}>
						<label>Username:&nbsp;</label>
						<input type="text" className="input-field" name="username" value={this.state.username} 
						  onChange={this.handleChange} />
						<label>Password:&nbsp;</label>
						<input type="password" className="input-field" name="password" value={this.state.password} 
						  onChange={this.handleChange} />
						<Button bsStyle="warning" type="submit" block>LOGIN</Button>
						
						<div className="row errors">
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