import React, { Component } from "react";
import { connect } from "react-redux";
import Message from "../components/Message";

class MessageContainer extends Component {
  render() {
    var { message,cart } = this.props;
    return <div>{this.showNotification(cart,message)}</div>;
  }

  showNotification = (cart, message) => {

    //Đếm số lượng sản phẩm trong giỏ hàng để hiển thị messenger
    // var quantityProductInCart = 0;

    // for (let i = 0; i < cart.length; i++) {
    //   quantityProductInCart += cart[i].quantity;
    // }

    return <Message message={message} />;
  };

}

const mapStateToProps = (state) => {
  return {
    message: state.message,
    cart: state.cart,
  };
};
export default connect(mapStateToProps, null)(MessageContainer);
