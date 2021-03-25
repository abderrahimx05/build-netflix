import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import Register from "./Register";
import "./SignUp.css";
function SignUp() {
  const [registeer, setRegister] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // const register = (e) => {
  //   e.preventDefault();
  //   auth
  //     .createUserWithEmailAndPassword(
  //       emailRef.current.value,
  //       passwordRef.current.value
  //     )
  //     .then((authUser) => {
  //       console.log(authUser);
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div>
      {registeer ? (
        <Register />
      ) : (
        <div className="signUp">
          <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="password" type="password" />
            <button type="submit" onClick={signIn}>
              Sign In
            </button>
            <h4>
              <span className="signup_under"> New to Netflix? </span>
              <span className="signup__sign" onClick={() => setRegister(true)}>
                Sign up now.
              </span>
            </h4>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignUp;
