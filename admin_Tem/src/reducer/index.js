import LoginReducer from './login.reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    Login: LoginReducer,
});