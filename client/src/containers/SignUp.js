import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUser, signUpUser } from '../actions/users';
import { Button } from 'react-bootstrap';
import '../styles/form.css';

class SignUp extends Component {
	constructor(props) {
		super();
		this.state = {
			username: '',
			email: '',
			password: '',
			password_confirmation: '',
			errors: []
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.passwordsExist())
		 	this.props.signUpUser(this.state)
			.then(user => {
				if(!user.errors) {
					this.props.loadUser(user);
					//Redirect to Profile Page!
					this.props.history.push(`/users/${this.props.user.id}`);
				} else { this.setState({ errors: user.errors }) }
			})	
	}

	passwordsExist = () => {
	if (this.state.password !== "" || this.state.password_confirmation !== "")
		return true;
	else 
		this.setState({errors:['Password fields cannot be blank']})
		return false;
	}

	
	
	render () {
		const showErrors = () => { return this.state.errors.map((error, i) => <p id={`error_${i+1}`}>{error}</p>) };
		console.log(this.state.errors)
		return (
			<div className="container" id="user-form">

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
								<label>Email:&nbsp;</label>
								<input type="text" className="input-field" name="email" value={this.state.email} 
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
								<label>Password Confirmation:&nbsp;</label>
								<input type="password" className="input-field" name="password_confirmation" value={this.state.password_confirmation} 
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
							 { showErrors() }
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
		user: state.currentUser
	}
}

export default connect(mapStateToProps, { signUpUser, loadUser })(SignUp);