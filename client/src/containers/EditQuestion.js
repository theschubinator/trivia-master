import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { setFormData, updateForm } from '../actions/userForm';
import { updateQuestion, editQuestion } from '../actions/questions';

class EditQuestion extends Component {
	componentDidMount() {
		const question_id = parseInt(this.props.match.params.id)
		const question = this.props.questions.find(question => question.id === question_id);
		this.props.setFormData(question);
	}
	

	handleSubmit = (e) => {
		e.preventDefault();
		const question_id = parseInt(this.props.match.params.id)
		this.props.updateQuestion(this.props.formData, question_id, this.props.history)
		.then(question => {this.props.editQuestion(question, this.props.formData.username)
			this.props.history.push('/questions')}
		)	
	}

	handleChange = (e) => {
		const { name, value } = e.target
		const newFormData = Object.assign({}, this.props.formData, {[name]: value})
		this.props.updateForm(newFormData)
	}

	render() {
		const { formData } = this.props
		return (
			<div id="questionForm">
				<form onSubmit={this.handleSubmit}>
					<div id="createQuestion">
						<label>Question</label><br/>
						<input type="text" name="question" value={formData.question} onChange={this.handleChange} />
					</div>
					<div id="createByCategory">
						<label>Choose a Category</label><br />
							<select name="category_name" value={formData.category_name} onChange={this.handleChange}>
							  <option value="" selected disabled hidden>Categories...</option>
								<option value="Sports">Sports</option>
								<option value="History">History</option>
								<option value="Science">Science</option>
								<option value="Entertainment">Entertainment</option>
							</select>
					</div>
					<div id="createAnswer">
						<label>Answer</label><br/>
						<input type="text" name="answer" value={formData.answer} onChange={this.handleChange} />
					</div>
					<div className="createIncorrectChoice">
						<label>Incorrect Choice #1</label><br/>
						<input type="text" name="incorrect1" value={formData.incorrect1} onChange={this.handleChange} />
					</div>
					<div className="createIncorrectChoice">
						<label>Incorrect Choice #2</label><br/>
						<input type="text" name="incorrect2" value={formData.incorrect2} onChange={this.handleChange} />
					</div>
					<div className="createIncorrectChoice">
						<label>Incorrect Choice #3</label><br/>
						<input type="text" name="incorrect3" value={formData.incorrect3} onChange={this.handleChange} />
					</div>

					<Button bsStyle="info" type="submit">Update Question</Button>
				</form>
			</div>	
		)
	}
}

const mapStateToProps = (state) => {
	return {
		questions: state.questions,
		formData: state.formData,
		user: state.currentUser
	}
}

export default connect(mapStateToProps, {setFormData, updateForm, updateQuestion, editQuestion })(EditQuestion);