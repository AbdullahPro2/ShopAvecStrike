import React from "react";
import { useNavigate } from "react-router-dom";

function CarouselItem({ item }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(item.category);
  }
  return (
    <div className={`crousel-container crousel-item-${item.id}`}>
      <div className="crousel-detail">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <button onClick={handleClick}>Explore now</button>
      </div>
      <img src={item.img} alt="Banner Images" className="carousel-img" />
    </div>
  );
}

export default CarouselItem;
