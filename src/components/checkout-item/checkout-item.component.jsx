import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, quantity, name, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {quantity > 1 ? (
          <button className="arrow-button" onClick={() => removeItem(cartItem)}>
            &#10094;
          </button>
        ) : <button className="arrow-button grey">&#10094;</button>}
        <span className="value">{quantity}</span>
        <button className="arrow-button" onClick={() => addItem(cartItem)}>
          &#10095;
        </button>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});


export default connect(null, mapDispatchToProps)(CheckoutItem);
