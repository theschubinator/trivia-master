import React from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateForm, submitQuestionForm } from '../actions/userForm';
import { Redirect } from 'react-router-dom';

const NewQuestion = ({formData, user, updateForm, submitQuestionForm, history}) => {
	if(!user.loggedIn) return <Redirect to="/" />

	const handleSubmit = (e) => {
		e.preventDefault();
		submitQuestionForm(formData)
		.then(() => history.push('/questions') )
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		const newFormData = Object.assign({}, formData, {[name]: value}, {user_id: user.id})
		updateForm(newFormData)
	}

	return (
		<div id="questionForm">
			<form onSubmit={handleSubmit}>
				<div id="createQuestion">
					<label>Question</label><br/>
					<input type="text" className="inputField" name="question" onChange={handleChange} />
				</div>
				<div id="createByCategory">
					<label>Choose a Category</label><br />
						<select name="category_name" value={formData.category_name} onChange={handleChange}>
						  <option value="" selected disabled hidden>Categories...</option>
							<option value="Sports">Sports</option>
							<option value="History">History</option>
							<option value="Science">Science</option>
							<option value="Entertainment">Entertainment</option>
						</select>
				</div>
				<div id="createAnswer">
					<label>Answer</label><br/>
					<input type="text" className="inputField" name="answer" onChange={handleChange} />
				</div>
				<div className="createIncorrectChoice">
					<label>Incorrect Choice #1</label><br/>
					<input type="text" className="inputField" name="incorrect1" onChange={handleChange} />
				</div>
				<div className="createIncorrectChoice">
					<label>Incorrect Choice #2</label><br/>
					<input type="text" className="inputField" name="incorrect2" onChange={handleChange} />
				</div>
				<div className="createIncorrectChoice">
					<label>Incorrect Choice #3</label><br/>
					<input type="text" className="inputField" name="incorrect3" onChange={handleChange} />
				</div>

				<Button bsStyle="info" bsSize="large" type="submit" block>Create Question</Button>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
		formData: state.formData
	}
}

export default connect(mapStateToProps, {updateForm, submitQuestionForm})(NewQuestion);