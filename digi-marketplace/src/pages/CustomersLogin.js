import React, { useRef } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

function CustomersLogin() {
  const history = useHistory();
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        history.push("/customer/dashboard/overview");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .then(history.push("/customer/dashboard/overview"));
  };

  return (
    <div className="login">
      <div className="login__component">
        <h1 onClick={() => history.push("/")}>ROZZ</h1>

        <div className="login__fields">
          <form method="post">
            <div className="login__heading">
              <h3>Signin</h3>
              <p>Customer</p>
            </div>
            <div className="text__field">
              <input
                ref={emailRef}
                type="text"
                placeholder="Username or Email"
              />
            </div>
            <div className="text__field">
              <input ref={passwordRef} type="text" placeholder="Password" />
            </div>
            <div className="forgot__passLink">Forgot Password?</div>
            <button onClick={signIn}>Login</button>
            <div className="sep__line"> ---------- Or ---------- </div>
            <Button
              variant="outlined"
              onClick={signInWithGoogle}
              class="favorite styled"
              type="button"
            >
              Signin with google
            </Button>
            <div className="sign__up">
              Don't have account? <a href="/customer/register">Signup here..</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomersLogin;
