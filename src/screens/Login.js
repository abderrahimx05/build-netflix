import React, { useState } from "react";
import "./Login.css";
import SignUp from "./SignUp";
import Footer from "../Footer";
import { useHistory } from "react-router-dom";

function Login() {
  const navigate = useHistory();

  const [signIn, setSignIn] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  return (
    <div className="log__all">
      <div className="login">
        <div className="login__backGround">
          <div className="img">
            <img
              onClick={() => navigate.push("/")}
              className="login__logo"
              src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt=""
            />
          </div>
          <div className="log">
            <button onClick={() => setSignIn(true)} className="login__button">
              Sign In
            </button>
          </div>
          <div className="login__gradient" />
        </div>

        <div className="login__body">
          {signIn ? (
            <SignUp />
          ) : (
            <>
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="login__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="button__getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="pup__section">
        <div className="tv__section">
          <div className="ifo__left">
            <h1>Enjoy on your TV.</h1>
            <h6>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more
            </h6>
          </div>
          <img className="img__tv" src="./images/home-tv.jpg" alt="" />
        </div>
        <div className="mb__section">
          <img className="img__mobile" src="./images/home-mobile.jpg" alt="" />

          <div className="ifo__left">
            <h1>Download your shows to watch offline.</h1>
            <h6>
              Save your favorites easily and always have something to watch.
            </h6>
          </div>
        </div>
        <div className="mac__section">
          <div className="ifo__left">
            <h1>Watch everywhere.</h1>
            <h6>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </h6>
          </div>
          <img className="img__mac" src="./images/home.jpg" alt="" />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Login;
