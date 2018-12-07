import {applyMiddleware, createStore, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import { fetchUserList } from '../actions/user';


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
