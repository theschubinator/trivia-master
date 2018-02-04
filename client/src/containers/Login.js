import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateForm, submitForm, resetFormData } from '../actions/userForm';
import { login, loadUser } from '../actions/users';
import { Redirect } from 'react-router-dom';

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
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Username</label>
					<input type="text" name="username" value={formData.username} onChange={this.handleChange} />
					<label>Password</label>
					<input type="text" name="password" value={formData.password} onChange={this.handleChange} />
					<input type="submit" />
				</form>
				<div>{user.error}</div>
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