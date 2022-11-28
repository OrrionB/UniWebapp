
import React from "react";
import { useState } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
// setting time frame for cookie expiry
const current = new Date();
const nextYear = new Date();
nextYear.setFullYear(current.getFullYear() + 1);




const LoginFunction = (props) => {

  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });


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
    fetch("http://localhost:5000/signUp", {
      // mode: 'no-cors',
      method: "POST",
      headers: { "Content-Type": "application/json" ,
      withCredentials: true
      },
      body: JSON.stringify(data)
      // if it recieves a response, the local cookies are set to be authorised, and the username is set here as well
    }).then((response) => 
    response.json().then((response => { 
      if (response.response === 'this user already exists')
      {setSuccess(false)
      setFailure(true)}
      else {setSuccess(true)
      setFailure(false)}}
      )))}
   
    

  return (
    
    <div id="SignUpBox">
      {/* <button onClick={sessionCheck}>validate me</button> */}
      <h1>Sign Up</h1>
      {/* If the correct information has been input, then the generator will appear */}
      {(
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
          {failure && (
        <h3> An account with this username already exists, please try again</h3>
      )}
      {success && (
        <h3> Account successfully created</h3>
      )}
        </form>
      )}
    </div>
  );
};

export default LoginFunction; /* the default that will export from this file */
