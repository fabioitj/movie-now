import { useState } from "react";
import { Route, Routes } from "react-router";
import Movie from "../../pages/movie/movie";
import Movies from "../../pages/movies/movies";
import NowPlaying from "../../pages/now_playing/now_playing";
import TopRated from "../../pages/top_rated/top_rated";
import BackButton from "../back-button/back-button";
import Pagination from "../pagination/pagination";
import { getNowPlaying } from "./../../hooks/movieApi";
import Card from "./../card/card";
import "./body.css";

const Body = ({search}) => {
  const [showBackButton, setShowBackButton] = useState(false);
  

  window.addEventListener("scroll", function () {
    if (showBackButton) {
      let offSet = window.pageYOffset;
      if (offSet > 1000) setShowBackButton(true);
      else {
        const backButton = document.getElementById("back-button");
        if (backButton) backButton.classList.remove("back-button-closed");

        setShowBackButton(false);
      }
    }
  });

  return (
    <section className="main">
      <Routes>
        <Route path="/now_playing" element={<NowPlaying search={search}/>} />
        <Route path="/top_rated" element={<TopRated search={search} />} />
        <Route path="/:id_movie" element={<Movie />} />
      </Routes>
      {showBackButton && <BackButton />}
      
    </section>
  );
};

export default Body;
