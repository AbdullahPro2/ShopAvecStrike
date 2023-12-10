import React, { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import { ProductContext } from "../context/productContext";
import "../styles/product.css";
import Product from "../components/Product";
function AllProducts() {
  const { products, isLoading, getAllProducts } = useContext(ProductContext);
  useEffect(() => {
    getAllProducts();
  }, []);

  if (isLoading) return <Loader />;
  return (
    <>
      <div className="products-heading">
        <h1>Our Collection</h1>
        <h3>We design our products with your quality in mind</h3>
      </div>
      <div className="products-container">
        {products.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default AllProducts;
