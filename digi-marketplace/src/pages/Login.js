import React from "react";
import "./Login.css";
// import PersonIcon from "@material-ui/icons/Person";
// import LockIcon from "@material-ui/icons/Lock";

function Login() {
  return (
    <div className="login">
      <div className="login__component">
        <h1>ROZZ</h1>
        <div className="login__fields">
          <form method="post">
            <div className="login__heading">
              <h3>Signin</h3>
            </div>
            <div className="text__field">
              <input type="text" placeholder="Username or Email" />
            </div>
            <div className="text__field">
              <input type="text" placeholder="Password" />
            </div>
            <div className="forgot__passLink">Forgot Password?</div>
            <button>Login</button>
            <div className="sign__up">
              Don't have account? <a href="/register">Signup here..</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
