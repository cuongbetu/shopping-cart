import React, { Component } from "react";
import { formatMoney } from "../constants/HelperMethod";
class CartItem extends Component {
  render() {
    const { cart } = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={cart.product.image}
            alt={cart.product.description}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{cart.product.name}</strong>
          </h5>
        </td>
        <td>{formatMoney(cart.product.price)}</td>
        <td className="center-on-small-only">
          <span className="qty">{cart.quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                         btn-rounded waves-effect waves-light"
                         onClick = {() => this.onUpdateQuantity(cart.product.name,-1)} >
              <div>—</div>
            </label>
            <label
              className="btn btn-sm btn-primary
                         btn-rounded waves-effect waves-light"
                         onClick = {() => this.onUpdateQuantity(cart.product.name,1)} >
              <div>+</div>
            </label>
          </div>
        </td>
        <td>
          {formatMoney(this.showSubTotal(cart.product.price, cart.quantity))}
        </td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onDelete(cart.product.name)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }

  showSubTotal = (price, quantity) => {
    return price * quantity;
  };

  onDelete = name => {
    let confirm = window.confirm(
      "Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng."
    );
    if (confirm) {
      this.props.onDelete(name);
      this.props.deleteCartItemMessage(name);
    }
    else return;
  };

  onUpdateQuantity = (productName,quantity) => {
      this.props.onUpdateQuantity(productName,quantity);
  }
}

export default CartItem;
