import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { currentUserReducer } from './reducers/currentUserReducer';
import { questionsReducer } from './reducers/questionsReducer';
import { gameReducer } from './reducers/gameReducer';
import { userGameReducer } from './reducers/userGameReducer';
import { usersReducer } from './reducers/usersReducer';

const reducers = combineReducers({
	currentUser: currentUserReducer,
	users: usersReducer,
	questions: questionsReducer,
	oldGame: userGameReducer,
	game: gameReducer
})

export default createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
)