import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/productContext";
import ProductComponent from "../components/Product";
import Alert from "../components/Alert";

function Product(props) {
  const { category } = useParams();
  const { getSpecificProduct, products } = useContext(ProductContext);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    getSpecificProduct(category);
  }, [category]);
  return (
    <>
      <div className="products-heading">
        <h1>Our {category}'s collection</h1>
        <h3>We design our products with quality in mind</h3>
      </div>
      <div className="products-container">
        {products.map((item) => (
          <ProductComponent
            item={item}
            key={item.id}
            setShowAlert={setShowAlert}
          />
        ))}
        {showAlert && <Alert setShowAlert={setShowAlert} />}
      </div>
    </>
  );
}

export default Product;
