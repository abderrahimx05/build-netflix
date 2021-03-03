import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <div className="login__backGround">
        <img
          className="login__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="login__button">Sign In</button>
        <div className="login__gradient" />
      </div>
      <div className="login__body">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="login__input">
          <form>
            <input type="email" placeholder="Email Address" />
            <button className="button__getStarted">GET STARTED</button>
          </form>
        </div>
      </div>
      <div className="tv__section">
        <div className="ifo__left">
          <h1>Enjoy on your TV.</h1>
          <h3>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h3>
        </div>
        <img
          className="img__tv"
          src="https://github.com/karlhadwen/netflix/blob/master/public/images/misc/home-tv.jpg?raw=true"
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;
