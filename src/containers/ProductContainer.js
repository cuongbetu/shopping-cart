import React, { Component } from "react";
import { connect } from "react-redux";
import Products from '../components/Products';
import ProductItem from '../components/ProductItem';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

class ProductContainer extends Component {
  render() {
    const { productList } = this.props;
    return (
            <Products>
                {this.showProduct(productList)}
            </Products>
    );
  }

  showProduct = (products) => {
    let {onAddToCart,addToCartMessage} = this.props;
    let result = null;
    if (products.length > 0){
    result = products.map((product, index) => {
        return <ProductItem index={index} product={product} 
                key={product.id} addToCartMessage = {addToCartMessage}  
                onAddToCart = {onAddToCart} />;
      });
    }
    return result
  };

}

ProductContainer.propTypes = {
    productList : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired,
        })
    ).isRequired
}

const mapStateToProps = (state) => {
  return {
    productList: state.productList,
  };
};

const mapDispatchToProps = (dispatch,props) => {
  return {
      onAddToCart : product => {
          dispatch(actions.addToCart(product,1))
      },
      addToCartMessage : productName => {
          dispatch(actions.addToCartMessage(productName));
      }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
