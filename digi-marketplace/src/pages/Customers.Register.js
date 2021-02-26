import React, { useRef } from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

function CustomerRegister() {
  const history = useHistory();

  const emailRef = useRef(null);
  const passwordWordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordWordRef.current.value
      )
      .then((authUser) => {
        history.push("/customer/login");
      })
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="register">
      <h1 onClick={() => history.push("/")}>ROZZ</h1>
      <div className="register__component">
        <div className="login__fields">
          <form method="post">
            <div className="login__heading">
              <h3>Register</h3>
              <p>Customer</p>
            </div>

            <div className="text__field">
              <input ref={emailRef} type="text" placeholder="Email" />
            </div>
            <div className="text__field">
              <input ref={passwordWordRef} type="text" placeholder="Password" />
            </div>

            <div className="forgot__passLink">Forgot Password?</div>
            <button onClick={register}>Register</button>
            <div className="sep__line"> ---------- Or ---------- </div>
            <button class="favorite styled" type="button">
              Signin with google
            </button>
            <div className="sign__up">
              If you have account? <a href="/customer/login">Sigin here..</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomerRegister;
