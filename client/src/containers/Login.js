import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateForm, submitForm, resetFormData } from '../actions/userForm';
import { login, loadUser } from '../actions/users';
import { Redirect } from 'react-router-dom';
import '../styles/form.css';

import { Button } from 'react-bootstrap';

class Login extends Component {
	handleChange = (e) => {
		const { name, value } = e.target;
		const formData = Object.assign({}, this.props.formData, { [name]: value });
		this.props.updateForm(formData);
	}


	handleSubmit = (e) => {
		e.preventDefault();
		this.props.login(this.props.formData)
		.then(user => {
			this.props.loadUser(user);
			if(!user.error) {
				this.props.resetFormData();
				//Redirect to Profile Page!
				this.props.history.push(`/users/${this.props.user.id}`);
			}
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
								{user.error}
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
		user: state.currentUser
	}
}

export default connect(mapStateToProps, {updateForm, submitForm, resetFormData, login, loadUser })(Login);