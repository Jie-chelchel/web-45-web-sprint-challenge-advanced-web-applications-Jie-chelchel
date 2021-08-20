import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../helpers/axiosWithAuth";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const initialUser = {
    password: "",
    username: "",
  };

  const [user, setUser] = useState(initialUser);
  const [error, setError] = useState("");
  const history = useHistory();
  //replace with error state

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/bubblepage");
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form className="auth" onSubmit={loginHandler}>
          <div className="control">
            <label>user name</label>
            <input
              type="text"
              placeholder="username"
              name="username"
              id="username"
              onChange={inputHandler}
              value={user.username}
            />
          </div>
          <div className="control">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              id="password"
              onChange={inputHandler}
              value={user.password}
            />
          </div>
          <button> Log in</button>
        </form>
      </div>

      <p id="error" className="error">
        {error}
      </p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
