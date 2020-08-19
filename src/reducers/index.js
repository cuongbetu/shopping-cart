import { combineReducers } from 'redux';
import productList from './productList';
import cart from './cart'
import message from './message'

const appReducer = combineReducers({
   productList : productList,
   cart : cart ,
   message : message
});

export default appReducer;