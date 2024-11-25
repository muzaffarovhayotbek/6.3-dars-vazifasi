import './App.css';
import React, { useState } from 'react';
import headerIcon from './assets/header-icon.png';
import movies from './movies.json';
import icons from './assets/icons.png';

function App() {
  const [totalLikes, setTotalLikes] = useState(0);
  const [movieLikes, setMovieLikes] = useState(movies.map(() => 0));

  function clickCounter(index) {
    const newMovieLikes = [...movieLikes];
    newMovieLikes[index] += 1;
    setMovieLikes(newMovieLikes);
    setTotalLikes(totalLikes + 1);
  }

  return (
    <div>
      <header className="header">
        <div className="container header__container">
          <div className="header-title">
            <h2>Kino Ro'yxati</h2>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <a href="#">Bosh sahifa</a>
              </li>
              <li>
                <a href="#">Kinolar</a>
              </li>
              <li>
                <a href="#">Yangiliklar</a>
              </li>
            </ul>
          </nav>
          <div className="header-end">
            <h2>Likes: {totalLikes}</h2>
            <img width={24} height={24} src={headerIcon} alt="Like icon" />
          </div>
        </div>
      </header>

      <div className="cards">
        {movies.map((movie, index) => (
          <article key={index} className="card-img container">
            <div className="image-wrap">
              <img className="movie-image" src={movie.Images[0]} alt={`${movie.Title} rasmi`} />
              <button
                onClick={() => clickCounter(index)}
                className="like-btn"
              >
                <img  width={10} height={10} src={icons} alt="" />
              </button>
            </div>

            <div className="card container card__container">
              <div className="card-first">
                <h2>{movie.id}</h2>
                <h2>{movie.Title}</h2>
                <p>{movie.Plot}</p>
                <h2 className="card-year">Yil:</h2>
                <h3>{movie.Year}</h3>
                <h2 className="release-date">Chiqarilgan sana:</h2>
                <h4>{movie.Released}</h4>
                <h2 className="genre">Janr:</h2>
                <h3>{movie.Genre}</h3>
                <h2 className="the-writer">Yozuvchi:</h2>
                <h3>{movie.Writer}</h3>
                <h2 className="language">Til:</h2>
                <h4>{movie.Language}</h4>
                <h2 className="awards">Mukofotlar:</h2>
                <h4>{movie.Awards}</h4>
              </div>
              <div className="card-two">
                <h2 className="rating">Reyting:</h2>
                <h4>{movie.Rated}</h4>
                <h2 className="duration">Davomiyligi:</h2>
                <h4>{movie.Runtime}</h4>
                <h2 className="rej">Rejissor:</h2>
                <h4>{movie.Director}</h4>
                <h2 className="actors">Aktyorlar:</h2>
                <h4>{movie.Actors}</h4>
                <h2 className="countries">Mamlakatlar:</h2>
                <h4>{movie.Country}</h4>
                <h2 className="IMDb-rating">IMDb reytingi:</h2>
                <h4>{movie.imdbRating}</h4>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default App;
