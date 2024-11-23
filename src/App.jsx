// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import './movies.json';
import header from './assets/header-icon.png';
import props from './movies.json';
function App() {
  const { id, Title, Year, Rated, Released, Runtime, Genre, Director, Image } =
    props;

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
          <img src="https://picsum.photos/200/300 " alt="" />
          <h2>Avatar</h2>
          <p>{id}</p>
        </div>
        <div className="card container card__container">
          <div className="card-first">
            <h2 className="card-year">Yil:</h2>
            <h3>{Year}</h3>
            <h2 className="release-date">Chiqarilgan sana</h2>
            <h4>{Year}</h4>
            <h2 className="genre">{Rated}</h2>
            <h3>Action</h3>
            <h2 className="the-writer">Yozuvchi</h2>
            <h3>{Released}</h3>

            <h2 className="language">Til</h2>
            <h4>English</h4>

            <h2 className="awards">Mukofotlar</h2>
            <h4>sovga</h4>
          </div>

          <div className="card-two">
            <h2 className="rating">reyting</h2>
            <h4>PG-13</h4>

            <h2 className="duration">Davomiyligi</h2>
            <h4>162mln</h4>

            <h2 className="rej">Rejissor</h2>
            <h4>james</h4>

            <h2 className="actors">Aktyorlar</h2>
            <h4>john</h4>

            <h2 className="countries">Mamlakatlar</h2>
            <h4>USA</h4>

            <h2 className="IMDb-rating">IMDb reytingi</h2>
            <h4>7.9</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
