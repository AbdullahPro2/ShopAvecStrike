import React, { useState } from "react";
import CartBtn from "./CartBtn";
import LazyLoad from "react-lazyload";

function Product({ item, setShowAlert }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="product">
      {/* Conditionally render the loader */}
      {!imageLoaded && <div className="loader"></div>}

      {/* LazyLoad component for the image */}
      <LazyLoad height={200} offset={100}>
        {/* Actual image with onLoad event handler */}
        <img
          src={item.image}
          alt="item icon"
          className={`product-img ${imageLoaded ? "loaded" : ""}`}
          onLoad={handleImageLoad}
        />
      </LazyLoad>

      <div className="product-detail">
        <h4>{item.name}</h4>
        <p>{item.new_price} €</p>
      </div>
      <CartBtn product={item} setShowAlert={setShowAlert} />
    </div>
  );
}

export default Product;
