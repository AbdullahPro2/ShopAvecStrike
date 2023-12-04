import React from "react";
import { useParams } from "react-router-dom";

function Product(props) {
  const { category } = useParams();
  console.log(category);
  return (
    <div>
      Product
      <h1>{category}</h1>
    </div>
  );
}

export default Product;
