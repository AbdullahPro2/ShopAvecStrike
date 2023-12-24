import React from "react";
import CartBtn from "./CartBtn";

function Product({ item, setShowAlert }) {
  return (
    <div className="product">
      <img src={item.image} alt="item iocn" className="product-img" />
      <div className="product-detail">
        <h4>{item.name}</h4>
        <p>{item.new_price} €</p>
      </div>
      <CartBtn product={item} setShowAlert={setShowAlert} />
    </div>
  );
}

export default Product;
