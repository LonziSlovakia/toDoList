import { combineReducers } from 'redux';
import todos from './todos';
import show from './show'
import color from './color'

export default combineReducers({
  todos,show,color
});