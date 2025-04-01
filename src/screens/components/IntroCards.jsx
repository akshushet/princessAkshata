import { Grid, Grid2 } from "@mui/material";
import React from "react";

const IntroCards = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "2rem 0", fontSize: "2rem", color: '#fff' }}>
        You Are a Girl In Whole Universe Who Has All...
      </h1>
      <Grid2
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        className="introCardsContainer"
      >
        <Grid2 item xs={12} sm={6} md={4} className="cardWrapper">
          <div className="card purple">
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/484/377/non_2x/3d-character-of-a-happy-young-girl-transparent-background-free-png.png"
              alt="Purple Character"
            />
            <div className="cardDescription">Beauty</div>
          </div>
        </Grid2>

        <Grid2 item xs={12} sm={6} md={4} className="cardWrapper">
          <div className="card teal">
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/484/107/non_2x/knowledgeable-cutie-3d-cute-girl-in-professor-character-with-a-book-and-glasses-transparent-background-free-png.png"
              alt="Teal Character"
            />
            <div className="cardDescription">Dedication</div>
          </div>
        </Grid2>

        <Grid2 item xs={12} sm={6} md={4} className="cardWrapper">
          <div className="card orange">
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/484/378/original/cute-and-cheerful-3d-girl-model-transparent-background-free-png.png"
              alt="Orange Character"
            />
            <div className="cardDescription">Kind Heart</div>
          </div>
        </Grid2>
      </Grid2>
    </>
  );
};

export default IntroCards;
