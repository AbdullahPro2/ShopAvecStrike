import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/productContext";
import ProductComponent from "../components/Product";

function Product(props) {
  const { category } = useParams();
  const { getSpecificProduct, products } = useContext(ProductContext);

  useEffect(() => {
    getSpecificProduct(category);
  }, [category]);
  return (
    <>
      <div className="products-heading">
        <h1>Our {category}'s collection</h1>
        <h3>We design our products with your quality in mind</h3>
      </div>
      <div className="products-container">
        {products.map((item) => (
          <ProductComponent item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Product;
