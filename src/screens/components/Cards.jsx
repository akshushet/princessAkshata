import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Images from "../../utils/images";

const Cards = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, 5); // Ensure we only track the 5 items
  }, []);

  const expand = (itemIndex) => {
    itemsRef.current.forEach((item, index) => {
      if (itemIndex === index) return;
      item.clicked = false;
    });

    gsap.to(itemsRef.current, {
      width: (i) => (i === itemIndex && itemsRef.current[i].clicked ? "42vw" : i === itemIndex ? "42vw" : "8vw"),
      duration: 2,
      ease: "elastic(1, .6)",
    });

    itemsRef.current[itemIndex].clicked = !itemsRef.current[itemIndex].clicked;
  };

  return (
    <div className="cardsBox">
      {[
        Images.card1,
        Images.card2,
        Images.card3,
        Images.card4,
        Images.card5,
      ].map((image, i) => (
        <div
          key={i}
          className="item"
          ref={(el) => (itemsRef.current[i] = el)}
          style={{ backgroundImage: `url(${image})` }}
          onClick={() => expand(i)}
        />
      ))}
    </div>
  );
};

export default Cards;
