import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateForm, submitForm } from '../actions/userForm';
import { login, loadUser } from '../actions/users';

class Login extends Component {
	handleChange = (e) => {
		const { name, value } = e.target
		const formData = Object.assign({}, this.props.formData, { [name]: value })
		this.props.updateForm(formData)
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.login(this.props.formData)
		.then(user => this.props.loadUser(user))
	}

	render () {
		const { formData } = this.props;

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Username</label>
					<input type="text" name="username" value={formData.username} onChange={this.handleChange} />
					<label>Password</label>
					<input type="text" name="password" value={formData.password} onChange={this.handleChange} />
					<input type="submit" />
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		formData: state.formData
	}
}

export default connect(mapStateToProps, {updateForm, submitForm, login, loadUser })(Login)