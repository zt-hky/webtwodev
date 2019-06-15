import {combineReducers} from 'redux';
import LoginReducer from './login-reducer';
const AllReducer = combineReducers({
     login: LoginReducer
})
export default AllReducer;