import React from "react";
import { useState } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Race = (props) => {
  const [race, setRace] = useState(cookies.get('race'));

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/race", {
      //this is the address of the server where we want to post
      method: "GET", // this is the method (ie post/get/delete)
    }).then((response) => {
      response.json().then((json) => {
        setRace(json.race);
        cookies.set('race', json.race, { path: '/' , maxAge: 28800, httpOnly: false})
      });
    });
  };
  return (
    <div>
      <div><h1>Your race is: </h1><br/> <h3>{race}</h3></div>
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          value="Generate"
        />
      </form><br/>
    </div>
  );
};

export default Race; /* the default that will export from this file */
