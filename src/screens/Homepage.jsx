import React, { useEffect } from "react";
import Images from "../utils/images";
import Cards from "./components/Cards";
import CatFollower from "./components/CatFollower";
import WordsLoop from "./components/WordsLoop";
import Crossword from "./Crossword";
import IntroCards from "./components/IntroCards";
import HeartDoodle from "./components/HeartDoodle";
import Languages from "./Languages";
import Poems from "./Poems";
import RandomQuoteGenerator from "./components/RandomQuoteGenerator";
import Model from "./components/Model";

const HomePage = () => {

  return (
    <>
    <WordsLoop />
    <Cards/>
    <Crossword />
    <HeartDoodle />
    {/* <Poems /> */}
    <RandomQuoteGenerator />
    <IntroCards />
    {/* <Languages /> */}
    <CatFollower />
    </>
  );
};

export default HomePage;
