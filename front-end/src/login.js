
import React from "react";
import { useState } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
// setting time frame for cookie expiry
const current = new Date();
const nextYear = new Date();
nextYear.setFullYear(current.getFullYear() + 1);




const LoginFunction = (props) => {
  console.log(cookies.get('authorised'))
// fixes use state bug that takes cookie data as a string instead of a boolean
let authorised = cookies.get('authorised')
if (authorised === 'false'){
  authorised = false}

if (authorised === 'true'){
  authorised = true
}


  
  const [data, setData] = useState({
    username: "",
    password: "",
  });
 
  // sets state if user has logged in previously or not
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(authorised);
  //sets state based on incorrect passwords and usernames
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [incorrectUsername, setIncorrectUsername] = useState(false);

// updates password and usename data as they are typed
  const username = data.username;
  const password = data.password;
 
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

  // submits data to the back end
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/login", {
      // mode: 'no-cors',
      method: "POST",
      headers: { "Content-Type": "application/json" ,
      withCredentials: true
      },
      body: JSON.stringify(data)
      // if it recieves a response, the local cookies are set to be authorised, and the username is set here as well
    }).then((response) => response.json().then((response => {
      if (response.response === 'wrong username') {
        setIncorrectPassword(false)
        setIncorrectUsername(true)
      } else {
        if (response.response === 'wrong password'){
        setIncorrectPassword(true)
        setIncorrectUsername(false)
      } else {
        setIncorrectPassword(false)
        setIncorrectUsername(false)
      cookies.set('authorised', true, { path: '/' , maxAge: 28800, httpOnly: false});
      cookies.set('username', data.username, {path: '/' , maxAge: 28800, httpOnly: false} )
      setUserIsAuthenticated(true);
    }}
      }
    )))}

//  when the log out button is pressed, the authorised cookie is removed
    const logout = () => {
      cookies.set('authorised', false, { path: '/', maxAge: 28800, httpOnly: false})
      setUserIsAuthenticated(false)
      cookies.remove('username')
      authorised = false
    }

  return (
    
    <div id="logInBox">
      {/* <button onClick={sessionCheck}>validate me</button> */}
      <h1>Login</h1>
      {/* If the correct information has been input, then the generator will appear */}
      {userIsAuthenticated && (
        <div>
          <h1> Welcome {cookies.get('username')}!</h1>
          <button onClick={logout}> logout </button>
        </div>
      )}
      {!userIsAuthenticated && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
          /> 
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          /> 
          <input type="submit" name="submit" />
        </form>
      )}
       {/* if an incorrect password has been input, then this prompt will appear */}
       {incorrectPassword && <p1> Sorry, your password is incorrect. Please try again. </p1>}
      {/* if an incorrect username has been input, then this prompt will */}
      {incorrectUsername && <p1> Sorry, your username is incorrect. Please try again. </p1>}
    </div>
  );
};

export default LoginFunction; /* the default that will export from this file */
