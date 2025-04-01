import React from "react";
import { useNavigate } from "react-router-dom";
// import "./Footer.scss";

const Footer = () => {
  const bubbleCount = 128;
  const navigate = useNavigate();

  return (
    <div className="footer">
      {/* Bubbles Section */}
      <div className="bubbles">
        {Array.from({ length: bubbleCount }).map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              "--size": `${2 + Math.random() * 4}rem`,
              "--distance": `${6 + Math.random() * 4}rem`,
              "--position": `${-5 + Math.random() * 110}%`,
              "--time": `${2 + Math.random() * 2}s`,
              "--delay": `${-1 * (2 + Math.random() * 2)}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="content">
        <div>
          <div>
            <b style={{ cursor: 'pointer' }} onClick={() => navigate('/heartfeltMessages')}>Heartfelt Messages</b>
          </div>
          <div>
            <b style={{ cursor: 'pointer' }} onClick={() => navigate('/expressingLove')}>Expressing Love</b>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <a
            className="image"
            target="_blank"
            style={{
              backgroundImage:
                'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg")',
            }}
          ></a>
          <p>© Reserved Till Infinity</p>
          <p>To Akshu</p>
        </div>
      </div>

      {/* SVG Filters */}
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Footer;
