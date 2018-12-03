import {applyMiddleware, createStore, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import {fetchUserList} from './actions/user_actions';
import rootReducer from './reducers/index';


const enhancers = [
  applyMiddleware(ReduxThunk)
];

const store = createStore(
  rootReducer,
  {},
  compose(...enhancers)
);

store.dispatch(fetchUserList());

export default store;
