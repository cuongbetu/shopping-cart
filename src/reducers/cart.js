import * as types from "../constants/ActionTypes";
import { findIndex } from "../constants/HelperMethod";
const data = JSON.parse(localStorage.getItem("cart"));
const initialState = data ? data : [];
const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      var index = findIndex(state, action.product.name);
      if (index !== -1) state[index].quantity += action.quantity;
      else state.push(action);
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    case types.DELETE_CART_ITEM:
      var index2 = findIndex(state, action.name);
      if (index2 !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    case types.UPDATE_QUANTITY:
      var index3 = findIndex(state, action.productName);
      state[index3].quantity += action.quantity;
      if (state[index3].quantity <= 0)
      state.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};

export default cart;
