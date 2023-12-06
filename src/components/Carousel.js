import React, { useEffect, useState } from "react";
import menBanner from "../Assets/menBanner.png";
import womenBanner from "../Assets/womenBanner.png";
import kidsBanner from "../Assets/kidsBanner.png";
import familyBanner from "../Assets/familyBanner.png";
import CarouselItem from "./CarouselItem";
import SwipeableViews from "react-swipeable-views";

const data = [
  {
    id: 0,
    title: "Family Collection",
    description:
      "Explore perfect styles for every family member! From trendy tops to cozy bottoms, stylish suits, comfortable boots, and more – unleash fashion for the whole family!",
    img: familyBanner,
    category: "Family's ",
  },
  {
    id: 1,
    title: "Men Collection",
    description:
      "Dive into our best collection featuring stylish t-shirts, classic jeans, trendy jackets, fashionable watches, sleek bags, and cool sunglasses",
    img: menBanner,
    category: "Men's",
  },
  {
    id: 2,
    title: "Women Collection",
    description:
      "Discover our best picks, including chic tops, comfy leggings, elegant coats, stylish outerwear, stunning jewelry, trendy accessories, fashionable handbags, purses, and eyewear",
    category: "women's",
    img: womenBanner,
  },
  {
    id: 3,
    title: "Kids Collection",
    description:
      "Explore cool shirts, stylish pants, dapper suits, trendy boots, and more – perfect for young gentlemen! Discover the latest in kids' fashion.",
    category: "kid's=",
    img: kidsBanner,
  },
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    let newIndex = activeIndex + 1;
    if (newIndex < 0) {
      newIndex = data.length - 1;
    } else if (newIndex >= data.length) {
      newIndex = 0;
    }
    const timtOut = setTimeout(() => {
      setActiveIndex(newIndex);
    }, 5000);

    return () => clearTimeout(timtOut);
  }, [activeIndex, data.length]);

  function handleChangeIndex(index) {
    if (index > data.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  }
  return (
    <div>
      <SwipeableViews
        index={activeIndex}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
        animateTransitions
        springConfig={{
          duration: "0.6s",
          easeFunction: "ease-out",
          delay: "0s",
        }}
      >
        {data.map((item) => (
          <CarouselItem item={item} key={item.id} />
        ))}
        <CarouselItem item={data[0]} />
      </SwipeableViews>
    </div>
  );
}

export default Carousel;
