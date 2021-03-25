import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import "./Register.css";
import SignUp from "./SignUp";
function Register() {
  const [signIn, setSignIn] = useState(false);
  const userNamRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
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
      {signIn ? (
        <SignUp />
      ) : (
        <div className="register">
          <form>
            <h1>Sign Up</h1>
            <input ref={userNamRef} placeholder="user Name" type="text" />
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="password" type="password" />
            <button type="submit" onClick={register}>
              Sign up
            </button>
            <h4>
              <span className="signup_under"> have already an account? </span>
              <span className="signup__sign" onClick={() => setSignIn(true)}>
                Sign in.
              </span>
            </h4>
          </form>
        </div>
      )}
    </div>
  );
}

export default Register;
