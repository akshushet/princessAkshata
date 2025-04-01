import React, { useEffect, useState } from "react";
import Images from "../../utils/images";

const CatFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="cat"
        style={{
          position: "absolute",
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: "50px",
          height: "50px",
        //   backgroundImage: "url('../../assets/images/mouseFollower.gif')"
          backgroundImage: `url(${Images.mouseFollower})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </div>
  );
};

export default CatFollower;
