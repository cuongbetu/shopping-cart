import React, { Component } from "react";
import { formatMoney } from '../constants/HelperMethod'
class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt="" />
            <div>
              <div className="mask waves-light waves-effect waves-light"></div>
            </div>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <div>{product.name}</div>
              </strong>
            </h4>
            <ul className="rating">
              <li>{this.showRating(product.rating)}</li>
            </ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{formatMoney(product.price)}</span>
              <span className="right">
                <div
                  onClick = {() => this.addToCart(product)}
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="Add to Cart"
                >
                  <i className="fa fa-shopping-cart"></i>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  showRating(ratings) {
    let result = [];
    if (ratings > 0) {
      for (let i = 0; i < ratings; i++) {
        result.push(<i className="fa fa-star" key={i}></i>);
      }
      for (let j = 1; j <= 5 - ratings; j++) {
        result.push(<i className="fa fa-star-o" key={j + ratings}></i>);
      }
    }
    return result;
  }

  addToCart = (product) => {
      this.props.onAddToCart(product);
      this.props.addToCartMessage(product.name);
  }

}


export default ProductItem;
