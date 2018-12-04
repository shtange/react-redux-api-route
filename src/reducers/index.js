import {combineReducers} from 'redux';
import userReducer from '../modules/user/reducers';


const rootReducer = combineReducers(
  {...userReducer}
)

export default rootReducer;