import * as types from "../constants/ActionTypes";
import * as notification from '../constants/Message'

const countCart = (data) => {
  let count = 0 ;
  for (let i = 0; i < data.length; i++) {
    count += data[i].quantity;
  }
  return count
} 

const data = JSON.parse(localStorage.getItem("cart"));
const initialState = data ? 'Bạn đang có '.concat(countCart(data) + ' sản phẩm trong giỏ hàng') : notification.MSG_WELCOME;
const message = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART_MESSAGE:
        return state = notification.MSG_ADD_TO_CART_SUCCESS.concat(action.productName + ' vào giỏ hàng');
    case types.DELETE_CART_ITEM_MESSAGE:
      return state = notification.MSG_DELETE_ITEM_SUCCESS.concat(action.productName + ' khỏi giỏ hàng');
    default:
      return state;
  }
};

export default message;
