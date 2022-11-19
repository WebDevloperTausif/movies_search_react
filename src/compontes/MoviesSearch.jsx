import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import moviescss from "../style/moviesearch.module.css";
import { Link } from "react-router-dom";
const MoviesSearch = () => {
  const [text, setText] = useState();
  const [movie, setmoive] = useState([]);
  const [temp, setTemp] = useState(false);
  useEffect(() => {
    const getdata = async () => {
      let res = await axios.get(
        `https://www.omdbapi.com/?s=${text}&page=1&apikey=89c5e3de`
      );
      res = await res.data.Search;
      setmoive(res);
    };
    getdata();
  }, [text]);
  const PupupOnOff = () => {
    setTemp(true);
  };
  const closes = () => {
    setTemp(false);
  };
  return (
    <div className={moviescss.container}>
      <h1>Movies Corn</h1>
      <div className={moviescss.childcontainer}>
        <div className={moviescss.inputSec}>
          <h1>MoviesSearch</h1>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            onKeyDown={PupupOnOff}
            placeholder="Type here Movies title for search"
          />
        </div>
        {temp ? (
          <div className={moviescss.popupSec}>
            {movie?.map((item, i) => {
              return (
                <Link key={i} to={`/movie/${item.imdbID}`} onClick={closes}>
                  <div className={moviescss.popupBox}>
                    <div className={moviescss.imgs}>
                      <img src={item.Poster} alt="" />
                    </div>
                    <div className={moviescss.text}>
                      <h3>{item.Title}</h3>
                      <h3>{item.Year}</h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MoviesSearch;
// Poster: "https://m.media-amazon.com/images/M/MV5BMTgzNzkxMzk5Nl5BMl5BanBnXkFtZTgwMTQ2MzA2MDE@._V1_SX300.jpg";
// Title: "Undefined";
// Type: "movie";
// Year: "2006";
// imdbID: "tt1436480";
