import "./App.css";
import Name from "./name";
import Race from "./race";
import Job from "./jobTitle";
import Fact from "./funFact1";
import Fact2 from "./funfact2";
import Fact3 from "./funfact3";
import Stats from "./stats";
// import logo from "../public/Images/logo/LogoGenPCDiceShadow-removebg-preview.png";

import { useState } from "react";


//This allows user input to effect the page in real time
function App() {
  const [data, setData] = useState({
    username: "",
    password: "",

  })
  //Allows dynamic HTML change based on different user input scenarios 
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false)
  const [incorrectUsername, setIncorrectUsername] = useState(false)
  
    const username = data.username;
    const password = data.password
  // This applies form input to cross refernce with stored user data
  //username
  const handleChange = (event) => {
  if(event.target.name === "username"){
    setData({
      username:event.target.value,
      password: data.password
    })
    //password
  } else if(event.target.name === "password"){
    setData({
      username:data.username,
      password: event.target.value
    });
  }
  };
  
  //This takes the user inputted data, and compares it to the data in the database, which sends back a...
  //response if it is A) correct, B) the user has input an incorrect password C) the user has input an incorrect username
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
  </form>}
{/* if an incorrect password has been input, then this prompt will appear */}
{incorrectPassword && <p1> Your password is incorrect </p1>}
{/* if an incorrect username has been input, then this prompt will */}
{incorrectUsername && <p1> Your username is incorrect </p1>}

      <div>
        <Name />
      </div>
      <div>
        <Race />
      </div>
      <div>
        <Job />
      </div>
      <div>
        <Fact />
      </div>
      <div>
        <Fact2 />
      </div>
      <div>
        <Fact3 />
      </div>
      <div>
        <Stats />
      </div>
      <div>
        <footer></footer>
      </div>


</div>

  );
}

export default App;
