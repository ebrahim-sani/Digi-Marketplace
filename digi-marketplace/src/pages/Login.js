import React from "react";
import "./Login.css";

require("react-dom");
window.React2 = require("react");

function Login() {
  return (
    <div className="login">
      <div className="login__component">
        <div className="input__fields">
          <h3>Sign in</h3>
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button type="submit">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
