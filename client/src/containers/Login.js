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
			<div id="user-form">

				<div className="row col-sm-12 col-md-5">
					<form onSubmit={this.handleSubmit}>

						<div className="row">
							<div className="col-sm-12">
								<label>Username:&nbsp;</label>
								<input type="text" className="input-field" name="username" value={this.state.username} 
								  onChange={this.handleChange} />
							</div>
						</div>

						<div className="row">
							<div className="col-sm-12">
								<label>Password:&nbsp;</label>
								<input type="password" className="input-field" name="password" value={this.state.password} 
								  onChange={this.handleChange} />
							</div>
						</div>

						<div className="row">
							<div className="col-sm-12">
								<Button bsStyle="warning" type="submit" block>LOGIN</Button>
							</div>
						</div>
								
					</form>

					<div className="row errors">
						<div className="col-sm-12">
							{this.state.error}
						</div>
					</div>
					
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