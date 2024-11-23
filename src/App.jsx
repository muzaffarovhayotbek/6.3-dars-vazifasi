// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import './movies.json';
import header from './assets/header-icon.png';
import props from './movies.json';
function App() {
  const [
    {
      Released,
      id,
      Awards,
      Title,
      Year,
      Rated,
      Runtime,
      Genre,
      Director,
      Image,
      Language,
      Actors,
      Country,
      imdbRating,
      Writer,
    },
  ] = props;

  return (
    <div>
      <header className="header">
        <div className="container header__container">
          <div className="header-title">
            <h2>Kino Ro`yxati</h2>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <a href="#">Bosh sahifa</a>
              </li>
              <li>
                <a href="#">kinolar</a>
              </li>
              <li>
                <a href="#">Yangiliklar</a>
              </li>
            </ul>
          </nav>
          <div className="header-end">
            <h2>likes</h2>
            <img width={24} height={24} src={header} alt="like" />
          </div>
        </div>
      </header>

      <div className="cards">
        <div className="card-img container">
          <div className="images">
            <img src={[Image]} alt="no img" />
          </div>
          <h2>{Title}</h2>
          <p>{}</p>
        </div>
        <div className="card container card__container">
          <div className="card-first">
            <h2 className="card-year">Yil:</h2>
            <h3>{Year}</h3>
            <h2 className="release-date">Chiqarilgan sana</h2>

            <h4>{Released}</h4>
            <h2 className="genre">Janr</h2>
            <h3>{Genre}</h3>
            <h2 className="the-writer">Yozuvchi</h2>
            <h3>{Writer}</h3>

            <h2 className="language">Til</h2>
            <h4>{Language}</h4>

            <h2 className="awards">Mukofotlar</h2>
            <h4>{Awards}</h4>
          </div>

          <div className="card-two">
            <h2 className="rating">reyting</h2>
            <h4>{Rated}</h4>

            <h2 className="duration">Davomiyligi</h2>
            <h4>{Runtime}</h4>

            <h2 className="rej">Rejissor</h2>
            <h4>{Director}</h4>

            <h2 className="actors">Aktyorlar</h2>
            <h4>{Actors}</h4>

            <h2 className="countries">Mamlakatlar</h2>
            <h4>{Country}</h4>

            <h2 className="IMDb-rating">IMDb reytingi</h2>
            <h4>{imdbRating}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
