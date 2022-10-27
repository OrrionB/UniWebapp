import React from "react";
import "./App.css";
import { useState } from "react";

const Login = (props) => {

  
  const handleSubmit = (event) => {
    event.preventDefault();
    let responseCode;
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log("response", response);
      responseCode = response.status
      if(responseCode === 200){
        setUserIsAuthenticated(true)
        setIncorrectPassword(false)
        setIncorrectUsername(false)
      } else {
        setUserIsAuthenticated(false)
        if(responseCode === 402){
        setIncorrectUsername(true)
        setIncorrectPassword(false)}
        else {
        setIncorrectPassword(true)
        setIncorrectUsername(false)}
  }})}
  return (
    <div>
      {/* If the correct information has been input, then the generator will appear */}
      {userIsAuthenticated && 
      <div>
      <h1> Welcome {username}</h1>
        </div>}
  {/* if nothing has been input onto the page, then the password and username boxes will appear */}
   {!userIsAuthenticated && <form onSubmit= {handleSubmit}> 
    <input type="text" name = "username" value = {username} onChange ={handleChange}/>
    <input type="password" name = "password" value = {password} onChange ={handleChange} />
    <input type="submit" name="submit" />
    </form>
    && <form onSubmit= {handleSubmit}></form>
    }
  
  {/* if an incorrect password has been input, then this prompt will appear */}
  {incorrectPassword && <p1> Your password is incorrect </p1>}
  {/* if an incorrect username has been input, then this prompt will */}
  {incorrectUsername && <p1> Your username is incorrect </p1>}
  </div>
)}

export default Login; /* the default that will export from this file */
