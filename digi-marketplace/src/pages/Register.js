import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <h1>ROZZ</h1>
      <div className="register__component">
        <div className="login__fields">
          <form method="post">
            <div className="login__heading">
              <h3>Register</h3>
            </div>
            <div className="text__field">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="text__field">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="text__field">
              <input type="text" placeholder="Email" />
            </div>
            <div className="text__field">
              <input type="text" placeholder="Password" />
            </div>
            <div className="text__field">
              <input type="text" placeholder="Confirm Password" />
            </div>
            <div className="forgot__passLink">Forgot Password?</div>
            <button>Login</button>
            <div className="sign__up">
              If you have account? <a href="/login">Sigin here..</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
