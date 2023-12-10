import React from "react";
import CartBtn from "./CartBtn";

function Product({ item }) {
  return (
    <div className="product">
      <img src={item.image} alt="item iocn" className="product-img" />
      <div className="product-detail">
        <h4>{item.name}</h4>
        <p>{item.new_price} €</p>
      </div>
      <CartBtn />
    </div>
  );
}

export default Product;
