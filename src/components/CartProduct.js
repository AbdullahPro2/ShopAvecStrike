import React from "react";
import "../styles/product.css";
import dustbin from "../Assets/dustbin.png";
function CartProduct({ item, quantity }) {
  function handleDustbin() {}
  return (
    <div className="product">
      <img src={item.image} alt="item iocn" className="product-img" />
      <div className="product-detail">
        <h4>{item.name}</h4>
        <p>{item.new_price} €</p>
        <div className="dustbin">
          <p>Quantity: {quantity}</p>
          <img src={dustbin} alt="dust bin" onClick={handleDustbin} />
        </div>
      </div>
      <button className="add-cart category-prodcut-button">Buy Now</button>
    </div>
  );
}

export default CartProduct;
