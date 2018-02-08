import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../actions/users';
import TopUser from './TopUser';
import { Button } from 'react-bootstrap';

class LeaderBoard extends Component {
	constructor() {
		super();
		this.state = {
			category: 'total'
		}
	}

	componentDidMount() {
		this.props.loadUsers()
	}

	handleClick = (e) => {
		const category = e.target.name
		this.setState({
			category: category
		})
	}

	render () {
		const { users } = this.props
		const category = this.state.category[0].toUpperCase() + this.state.category.slice(1)
		console.log(this.state.category)
		const showLeaderBoard = (category='total', u=users) => {
			const stats = findUsersStats(users)
			const topUsers = statsByCategory(category, stats)
			return topUsers.map(user => {
				return <TopUser user={user} category={category} />
			})
		}

		return (
			<div>
				<h1>LeaderBoard</h1>
				<p>Category: {category}</p>
				<Button name='total' onClick={this.handleClick}>All</Button>
				<Button name='sports' onClick={this.handleClick}>Sports</Button>
				<Button name='history' onClick={this.handleClick}>History</Button>
				<Button name='science' onClick={this.handleClick}>Science</Button>
				<Button name='entertainment' onClick={this.handleClick}>Entertainment</Button>
				{showLeaderBoard(this.state.category)}
			</div>
		)
	}
}

const mapStatetoProps = (state) => {
	return {
		users: state.users
	}
}

const findUsersStats = (users) => {
	let usersStats = []
	users.map(user => { 
		const total = Math.round((user.total_correct/(user.games_played * 10) * 100) || 0)
		const entertainment = Math.round((user.entertainment_correct/user.entertainment_played) * 100) || 0
		const sports = Math.round((user.sports_correct/user.sports_played) * 100) || 0
		const science = Math.round((user.science_correct/user.science_played) * 100) || 0
		const history = Math.round((user.history_correct/user.history_played) * 100) || 0
		usersStats = usersStats.concat({ username: user.username, total, entertainment, sports, science, history })
	})
	return usersStats
}

const statsByCategory = (category, stats) => {
	switch(category) {
		case 'total':
			return stats.sort((a,b) => b.total - a.total)
		case 'sports':
			return stats.sort((a,b) => b.sports - a.sports)
		case 'history':
			return stats.sort((a,b) => b.history - a.history)
		case 'entertainment':
			return stats.sort((a,b) => b.entertainment - a.entertainment)
		case 'science':
			return stats.sort((a,b) => b.science - a.science)
	}
}

export default connect(mapStatetoProps, { loadUsers })(LeaderBoard);