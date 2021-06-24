import { combineReducers } from 'redux';
import HeaderReducer from './HeaderReducer'
import MenubarReducer from './MenubarReducer'

export default combineReducers({
    HeaderReducer,
    MenubarReducer
})