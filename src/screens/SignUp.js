import React from "react";
import "./SignUp.css";
function SignUp() {
  return (
    <div className="signUp">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="password" type="password" />
        <button type="submit"> Sign In</button>
        <h4>
          {" "}
          <span className="signup_under"> New to Netflix?</span> Sign up now.
        </h4>
      </form>
    </div>
  );
}

export default SignUp;
