import React, { Component } from "react";
import MessageContainer from '../containers/MessageContainer'
import CartContainer from '../containers/CartContainer';
class Products extends Component {
  render() {
    return (
      <div className="container">
        <section className="section">
          <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
          <div className="row">
              {this.props.children}
          </div>
        </section>
        <MessageContainer/>
        <CartContainer />
      </div>
    );
  }

  
}


export default Products;
