import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateForm, submitForm, grabErrors, resetFormData } from '../actions/userForm';
import { loadUser } from '../actions/users';
import { Button } from 'react-bootstrap';
import '../styles/form.css';

class SignUp extends Component {
	handleChange = (e) => {
		const { name, value } = e.target;
		const formData = Object.assign({}, this.props.formData, { [name]: value });
		this.props.updateForm(formData);
	}

	passwordsExist = () => {
		if (this.props.formData.password !== "" || this.props.formData.password_confirmation !== "")
			return true;
		else 
			this.props.grabErrors({errors:['Password fields cannot be blank']})
			return false;
	}

	SubmitForm = () => {
	this.props.submitForm(this.props.formData)
		.then(user => {
			this.props.loadUser(user);
			if(!user.errors) {
				this.props.resetFormData();
				//Redirect to Profile Page!
				this.props.history.push(`/users/${this.props.user.id}`);
			} 
		})	
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.passwordsExist())
	 		this.SubmitForm();	
	}

	showErrors = () => {
		const user = this.props.user;
		const formData = this.props.formData;
		if (user.errors) 
			return user.errors.map(error => <div>{error}</div>);
		if (formData.errors)
			return <div>{formData.errors[0]}</div>;
	}

	
	render () {
		const { formData } = this.props;

		return (
			<div className="row">
				<div className="col-md-12 loginForm">
					<form onSubmit={this.handleSubmit}>
						<div className="username">
							<label>Username</label><br/>
							<input type="text" name="username" value={formData.username} onChange={this.handleChange} />
						</div>
						<div className="email">
							<label>Email</label><br/>
							<input type="text" name="email" value={formData.email} onChange={this.handleChange} />
						</div>
						<div className="password">
							<label>Password</label><br/>
							<input type="text" name="password" value={formData.password} onChange={this.handleChange} />
						</div>
						<div className="passwordConfirmation">
							<label>Password Confirmation</label><br/>
							<input type="text" name="password_confirmation" value={formData.password_confirmation} onChange={this.handleChange} />
						</div>
						<div>
							<Button bsStyle="info" type="submit">Sign Up</Button>
						</div>
						<div className="errors">
							{this.showErrors()}
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

export default connect(mapStateToProps, {updateForm, submitForm, loadUser, grabErrors, resetFormData })(SignUp);