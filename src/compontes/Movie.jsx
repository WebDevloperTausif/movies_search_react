import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import moviecss from "../style/movie.module.css";
const Movie = () => {
  const params = useParams().id;
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    const getdata = async (params) => {
      let res = await axios.get(
        `  http://www.omdbapi.com/?i=${params}&apikey=89c5e3de`
      );
      res = await res.data;
      setmovie(res);
    };
    getdata(params);
  }, [params, movie]);

  return (
    <div className={moviecss.container}>
      <div className={moviecss.movie_grid}>
        <div className={moviecss.movie_poster}>
          <img src={movie.Poster} alt="" />
        </div>
        <div className={moviecss.movie_info}>
          <div className={moviecss.movie_title}>
            <span>Title :</span>
            <p> {movie.Title}</p>
          </div>
          <div className={moviecss.movie_misc_info}>
            <Rating rate={movie.Ratings} />
          </div>
          <div className={moviecss.genre}>
            <span>Genre:</span> <p>{movie.Genre}</p>
          </div>
          <div className={moviecss.writer}>
            <span>writer:</span> <p>{movie.Writer}</p>
          </div>
          <div className={moviecss.actors}>
            <span>actors:</span> <p>{movie.Actors}</p>
          </div>
          <div className={moviecss.plot}>
            <span>plot:</span> <p>{movie.Plot}</p>
          </div>
          <div className={moviecss.language}>
            <span>Language:</span>
            <p>{movie.Language}</p>
          </div>
          <div className={moviecss.awards}>
            <span>
              <i className="fas fa-award"></i>
            </span>
            <p>{movie.Awards}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;

// {Actors,Awards,BoxOffice,Country,DVD,Director,Genre,Language,Metascore,Plot,Poster,Production,Rated,Ratings,Released,Response,Runtime,Title,Type,Website,Writer,Year,imdbID,imdbRating,imdbVotes}
// Actors
// :
// "Shah Rukh Khan, Katrina Kaif, Anushka Sharma"
// Awards
// :
// "22 wins & 34 nominations"
// BoxOffice
// :
// "N/A"
// Country
// :
// "N/A"
// DVD
// :
// "06 Sep 2005"
// Director
// :
// "Yash Chopra"
// Genre
// :
// "Drama, Romance"
// Language
// :
// "Hindi"
// Metascore
// :
// "N/A"
// Plot
// :
// "A woman is made to realize that her prayers and sacrifice to save her boyfriend's life may have led him to a fate worse than death."
// Poster
// :
// "https://m.media-amazon.com/images/M/MV5BODBmNDkzN2MtZTI2Zi00NThmLWFmNDgtNTRiOWZiYmIyOTI0XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_SX300.jpg"
// Production
// :
// "N/A"
// Rated
// :
// "Not Rated"
// Ratings
// :
// (2) [{…}, {…}]
// Released
// :
// "13 Nov 2012"
// Response
// :
// "True"
// Runtime
// :
// "176 min"
// Title,Type,Website,Writer,Year,imdbID,imdbRating,imdbVotes
// Title
// :
// "Jab Tak Hai Jaan"
// Type
// :
// "movie"
// Website
// :
// "N/A"
// Writer
// :
// "Aditya Chopra, Devika Bhagat"
// Year
// :
// "2012"
// imdbID
// :
// "tt2176013"
// imdbRating
// :
// "6.7"
// imdbVotes
// :
// "55,345
