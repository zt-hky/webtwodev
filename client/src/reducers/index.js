import { combineReducers } from 'redux';
import SignInReducer from './signin.reducer';
import SignUpReducer from './signup.reducer';
import ChangePassowrdReducer from './changePassword.reducer';
import MovieReducer from './moive.reducer';
import CinemaReducer from './cinema.reducer';
const AllReducer = combineReducers({
     signIn: SignInReducer,
     signUp: SignUpReducer,
     changePass: ChangePassowrdReducer,
     movie: MovieReducer,
     cinema: CinemaReducer
})

export default AllReducer;