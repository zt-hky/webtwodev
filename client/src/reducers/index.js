import { combineReducers } from 'redux';
import SignInReducer from './signin.reducer';
import SignUpReducer from './signup.reducer';
const AllReducer = combineReducers({
     signIn: SignInReducer,
     signUp: SignUpReducer
})
export default AllReducer;