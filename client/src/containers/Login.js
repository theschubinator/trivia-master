import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateForm, submitForm } from '../actions/userForm';

class Login extends Component {
	handleChange = (e) => {
		const { name, value } = e.target
		const formData = Object.assign({}, this.props.formData, { [name]: value })
		this.props.updateForm(formData)
	}

	handleSubmit = () => {
		this.props.submitForm(this.props.formData)
	}

	render () {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Username</label>
					<input type="text" name="username" onChange={this.handleChange} />
					<label>Password</label>
					<input type="text" name="password" onChange={this.handleChange} />
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

export default connect(mapStateToProps, {updateForm, submitForm})(Login)