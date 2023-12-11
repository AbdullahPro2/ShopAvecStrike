import React from "react";
import "../styles/product.css";

function CartProduct({ item, quantity }) {
  return (
    <div className="product">
      <img src={item.image} alt="item iocn" className="product-img" />
      <div className="product-detail">
        <h4>{item.name}</h4>
        <p>{item.new_price} €</p>
        <p>Quantity: {quantity}</p>
      </div>
      <button className="add-cart category-prodcut-button">Buy Now</button>
    </div>
  );
}

export default CartProduct;
