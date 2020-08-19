import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import PropTypes from "prop-types";
import * as actions from '../actions/index'
import * as message from "../constants/Message";
class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showCartResult(cart)}
      </Cart>
    );
  }

  showCartItem = (carts) => {
    let {onDelete,onUpdateQuantity,deleteCartItemMessage} = this.props;
    let result = null;
    if (carts.length > 0) {
      result = carts.map((cart, index) => {
        return <CartItem index={index} cart={cart} key={index} onUpdateQuantity = {onUpdateQuantity}
                onDelete = {onDelete}
                deleteCartItemMessage = {deleteCartItemMessage}  />;
      });
    }
    else{
      result = <tr><td>{message.MSG_CART_EMPTY}</td></tr>;
    }
    return result;
  };

  showCartResult = (carts) => {
    let result = null;
    if (carts) {
      result = <CartResult cart={carts} />
    }
    return result;
  };
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch,props) => {
  return {
    onDelete : (name) => {
      dispatch(actions.onDelete(name))
    },
    onUpdateQuantity : (productName,quantity) => {
      dispatch(actions.updateQuantity(productName,quantity))
    },
    deleteCartItemMessage : productName => {
      dispatch(actions.deleteCartItemMessage(productName));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
