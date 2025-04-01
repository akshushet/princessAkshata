import React, { useEffect, useState } from "react";

const Fireworks = () => {
  const [fireworks, setFireworks] = useState([]);
  const texts = [
    "Happy New Year!",
    "Congratulations!",
    "Cheers!",
    "You're Amazing!",
    "Wow!",
    "Let's Celebrate!",
    "Hooray!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomText = texts[Math.floor(Math.random() * texts.length)];
      const newFirework = {
        id: Date.now(),
        text: randomText,
        left: Math.random() * 100, // Random horizontal position
      };

      setFireworks((prev) => [...prev, newFirework]);

      setTimeout(() => {
        setFireworks((prev) => prev.filter((fw) => fw.id !== newFirework.id));
      }, 4000); // Remove firework after 4 seconds
    }, 1500); // Launch every 1.5 seconds

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className="fireworks-container">
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="firework"
          style={{ left: `${firework.left}%` }}
        >
          <div className="burst">
            <span className="text">{firework.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fireworks;
