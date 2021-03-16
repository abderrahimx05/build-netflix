import React, { useRef } from "react";
import { auth } from "../firebase";
function Register() {
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
    <div className="register">
      <form>
        <h1>Sign In</h1>
        <input ref={userNamRef} placeholder="user Name" type="text" />
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="password" type="password" />
        <button type="submit" onClick={register}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Register;
