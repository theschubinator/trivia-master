import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateForm, submitForm, grabErrors, resetFormData } from '../actions/userForm';
import { loadUser } from '../actions/users';

class SignUp extends Component {

	handleChange = (e) => {
		const { name, value } = e.target
		const formData = Object.assign({}, this.props.formData, { [name]: value })
		this.props.updateForm(formData)
	}

	passwordsExist = () => {
		if (this.props.formData.password != "" || this.props.formData.password_confirmation != "") {
			return true
		}
		this.props.grabErrors({errors:['Password fields cannot be blank']})
		return false
	}

	attemptToSubmitForm = () => {
		this.props.submitForm(this.props.formData)
			.then(user => {
				if(!user.errors) {
					this.props.loadUser(user)
					this.props.resetFormData()
					//Redirect to Profile Page Here!
					this.props.history.push(`/users/${this.props.user.id}`)
				} else {
					this.props.grabErrors(user)
				}
			})	
	}

	handleSubmit = (e) => {
		e.preventDefault()
		 if (this.passwordsExist())
		 	this.attemptToSubmitForm()	
	}



	
	render () {
		const { user, formData } = this.props;

		const showErrors = () => {
			if (formData.errors) {
				return formData.errors.map((error, i) =>
					<div key={i}>{error}</div>
				)
			}
		}

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Username</label>
					<input type="text" name="username" value={formData.username} onChange={this.handleChange} />
					<label>Email</label>
					<input type="text" name="email" value={formData.email} onChange={this.handleChange} />
					<label>Password</label>
					<input type="text" name="password" value={formData.password} onChange={this.handleChange} />
					<label>Password Confirmation</label>
					<input type="text" name="password_confirmation" value={formData.password_confirmation} onChange={this.handleChange} />
					<input type="submit" />
				</form>
				{ showErrors() }
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

export default connect(mapStateToProps, {updateForm, submitForm, loadUser, grabErrors, resetFormData })(SignUp)