import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { currentUserReducer } from './reducers/currentUserReducer';
import { userFormDataReducer } from './reducers/userFormDataReducer';
import { questionsReducer } from './reducers/questionsReducer';
import { gameReducer } from './reducers/gameReducer';

const reducers = combineReducers({
	currentUser: currentUserReducer,
	formData: userFormDataReducer,
	questions: questionsReducer,
	game: gameReducer
})

export default createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
)