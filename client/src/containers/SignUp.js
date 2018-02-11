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

		return (
			<div className="row">
				<div className="col-md-5 loginForm signUp">
					<form onSubmit={this.handleSubmit}>
						<div>
							<label>Username</label><br/>
							<input type="text" clasName="inputField" name="username" value={this.state.username} onChange={this.handleChange} />
						</div>
						<div className="email">
							<label>Email</label><br/>
							<input type="text" className="inputField" name="email" value={this.state.email} onChange={this.handleChange} />
						</div>
						<div className="password">
							<label>Password</label><br/>
							<input type="password" className="inputField" name="password" value={this.state.password} onChange={this.handleChange} />
						</div>
						<div className="passwordConfirmation">
							<label>Password Confirmation</label><br/>
							<input type="password" className="inputField" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} />
						</div>
						<div>
							<Button bsStyle="success" className="submitBtn" type="submit">Sign Up</Button>
						</div>
						<div className="errors">
							{showErrors()}
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

export default connect(mapStateToProps, { signUpUser, loadUser })(SignUp);