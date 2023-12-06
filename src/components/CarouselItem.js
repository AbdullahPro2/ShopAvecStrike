import React from "react";

function CarouselItem({ item }) {
  return (
    <div className={`crousel-container crousel-item-${item.id}`}>
      <div className="crousel-detail">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <button>Explore now</button>
      </div>
      <img src={item.img} alt="Banner Images" className="carousel-img" />
    </div>
  );
}

export default CarouselItem;
