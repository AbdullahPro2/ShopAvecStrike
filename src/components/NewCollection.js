import React, { useContext, useEffect } from "react";
import "../styles/newCollection.css";
import { ProductContext } from "../context/productContext";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function NewCollection() {
  const { products, isLoading, getNewCollectionData } =
    useContext(ProductContext);

  console.log(isLoading);
  useEffect(() => {
    getNewCollectionData();
  }, []);
  console.log(isLoading);
  if (isLoading) return <Loader />;
  return (
    <>
      <h1 className="collection-heading">New Collection</h1>
      <div className="new-collection-container">
        {products.map((item, index) => (
          <div className={`new-collection-items new-collection-${index + 1}`}>
            <Link to={"/allproducts"}>
              <img src={item.image} alt={"new collection photos"} />
              <div className="new-collection-details">
                <h2>{item.category}</h2>
                <p>{item.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default NewCollection;
