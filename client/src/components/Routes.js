import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import PlayGame from '../containers/PlayGame';
import UserProfile from '../components/UserProfile';
import ShowQuestions from '../containers/ShowQuestions';
import { Home } from '../components/Home';

export const Routes = () => {
	return (
		<div>
			<Route exact path='/' component={Home} />	
			<Route exact path='/login' component={Login} />
			<Route exact path='/signup' component={SignUp} />
			<Route exact path='/playgame' component={PlayGame} />
			<Route exact path='/users/:id' component={UserProfile} />
			<Route exact path='/questions' component={ShowQuestions} />
		</div>
	)
};