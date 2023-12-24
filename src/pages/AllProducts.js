import React, { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import { ProductContext } from "../context/productContext";
import "../styles/product.css";
import Product from "../components/Product";
import Alert from "../components/Alert";
function AllProducts() {
  const { products, isLoading, getAllProducts } = useContext(ProductContext);
  const [showAlert, setShowAlert] = useState(false);
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
          <Product setShowAlert={setShowAlert} item={item} key={item.id} />
        ))}
        {showAlert && <Alert setShowAlert={setShowAlert} />}
      </div>
    </>
  );
}

export default AllProducts;
