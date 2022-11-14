import React from "react";
import { useState } from "react";

const LoginFunction = (props) => {
  //
  // return (
  //
  //   );
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [incorrectUsername, setIncorrectUsername] = useState(false);

  const username = data.username;
  const password = data.password;
  // This applies form input to cross refernce with stored user data
  //username
  const handleChange = (event) => {
    if (event.target.name === "username") {
      setData({
        username: event.target.value,
        password: data.password,
      });
      //password
    } else if (event.target.name === "password") {
      setData({
        username: data.username,
        password: event.target.value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let responseCode;
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log("response", response);
      responseCode = response.status;
      if (responseCode === 200) {
        setUserIsAuthenticated(true);
        setIncorrectPassword(false);
        setIncorrectUsername(false);
      } else {
        setUserIsAuthenticated(false);
        if (responseCode === 402) {
          setIncorrectUsername(true);
          setIncorrectPassword(false);
        } else {
          setIncorrectPassword(true);
          setIncorrectUsername(false);
        }
      }
    });
  };

  return (
    <div>
      <h1>Login</h1>
      {/* If the correct information has been input, then the generator will appear */}
      {userIsAuthenticated && (
        <div>
          <h1> Welcome {username}</h1>
        </div>
      )}
      {!userIsAuthenticated && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <input type="submit" name="submit" />
        </form>
      )}
       {/* if an incorrect password has been input, then this prompt will appear */}
       {incorrectPassword && <p1> Your password is incorrect </p1>}
      {/* if an incorrect username has been input, then this prompt will */}
      {incorrectUsername && <p1> Your username is incorrect </p1>}
    </div>
  );
};

export default LoginFunction; /* the default that will export from this file */
