import counterReducer from './counterReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
	counterReducer
});
export default allReducers;