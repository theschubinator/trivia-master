import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { updateQuestion, editQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom';

class EditQuestion extends Component {
	constructor(props) {
		super(props)
		this.state = {
			question: '',
			answer: '',
			incorrect1: '',
			incorrect2: '',
			incorrect3: '',
			category_name: '',
			errors: []
		}
	}
	componentDidMount() {
		if(!this.props.user.loggedIn) return <Redirect to="/" />
		const question_id = parseInt(this.props.match.params.id, 10)
		const question = this.props.questions.find(question => question.id === question_id);
		this.setState({ 
			question: question.question,
			answer: question.answer,
			incorrect1: question.incorrect1,
			incorrect2: question.incorrect2,
			incorrect3: question.incorrect3,
			category_name: question.category.name,
		})
	}
	

	handleSubmit = (e) => {
		e.preventDefault();
		const question_id = parseInt(this.props.match.params.id, 10)
		this.props.updateQuestion(this.state, question_id)
		.then(question => {this.props.editQuestion(question)
			this.props.history.push('/questions')}
		)	
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	render() {
		if(!this.props.user.loggedIn) return <Redirect to="/" />

		return (
			<div id="questionForm">
				<form onSubmit={this.handleSubmit}>
					<div id="createQuestion">
						<label>Question</label><br/>
						<input type="text" className="inputField" name="question" value={this.state.question} onChange={this.handleChange} />
					</div>
					<div id="createByCategory">
						<label>Choose a Category</label><br />
							<select name="category_name" value={this.state.category_name} onChange={this.handleChange}>
							  <option value="" selected disabled hidden>Categories...</option>
								<option value="Sports">Sports</option>
								<option value="History">History</option>
								<option value="Science">Science</option>
								<option value="Entertainment">Entertainment</option>
							</select>
					</div>
					<div id="createAnswer">
						<label>Answer</label><br/>
						<input type="text" name="answer" className="inputField" value={this.state.answer} onChange={this.handleChange} />
					</div>
					<div className="createIncorrectChoice">
						<label>Incorrect Choice #1</label><br/>
						<input type="text" name="incorrect1" className="inputField" value={this.state.incorrect1} onChange={this.handleChange} />
					</div>
					<div className="createIncorrectChoice">
						<label>Incorrect Choice #2</label><br/>
						<input type="text" name="incorrect2" className="inputField" value={this.state.incorrect2} onChange={this.handleChange} />
					</div>
					<div className="createIncorrectChoice">
						<label>Incorrect Choice #3</label><br/>
						<input type="text" name="incorrect3" className="inputField" value={this.state.incorrect3} onChange={this.handleChange} />
					</div>

					<Button bsStyle="success" bsSize="large" type="submit" block>Update Question</Button>
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

export default connect(mapStateToProps, { updateQuestion, editQuestion })(EditQuestion);