import React from "react";
import moviecss from "../style/moviesdemo.module.css";
const Moviedemo = () => {
  return (
    <div className={moviecss.container}>
      <div className={moviecss.movie_grid}>
        <div className={moviecss.movie_poster}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
            alt=""
          />
        </div>
        <div className={moviecss.movie_info}>
          <h3 className={moviecss.movie_title}>
            Guardians of the Galaxy vol .2
          </h3>
          <ul className={moviecss.movie_misc_info}>
            <li className="year">Year : 2017</li>
            <li className="rated"> Ratings : PG-13</li>
            <li className="released"> released: 05 may 2017</li>
          </ul>
          <p className={moviecss.genre}>
            <b>Genre:</b> Action, Adventure,Comedy
          </p>
          <p className={moviecss.writer}>
            <b>writer:</b> James Gunn Don Andy Lanning
          </p>
          <p className={moviecss.actors}>
            <b>actors:</b> Chris Pratt, zoe Saldana Dave Bautista
          </p>
          <p className={moviecss.plot}>
            <b>plot:</b> the Guardians stuggle to keep together as a team while
            dealing with their personal family issues notably Star-Lord's
            ecounter with his father the ambition celestial being Ego
          </p>
          <p className={moviecss.language}> Language:English</p>
          <p className={moviecss.awards}>
            <b>
              <i className="fas fa-award"></i>
            </b>
            Nominated for i Oscar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Moviedemo;
