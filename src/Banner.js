import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundPosition: "center center",
        backgroundSize: "banner",
        backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/e178a4e7-4f52-4661-b2ae-41efa25dca7c/e4546141-0f64-4bb3-a445-fa56ac7122bd/MA-fr-20210222-popsignuptwoweeks-perspective_alpha_website_medium.jpg')`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">this a test description</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
