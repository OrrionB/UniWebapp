import React from "react";
import { useState } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Name = (props) => {

  if (cookies.get('name') === undefined){
    cookies.set('name','', { path: '/' , maxAge: 28800, httpOnly: false})
}

  const [name, setName] = useState(cookies.get('name'));
  

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Prevent default stops the page refreshing on the submit of the button push */
    fetch("http://localhost:5000/name", {
      method: "GET",
    }).then((response) => {
      response.json().then((json) => {
        setName(json.name);
        cookies.set('name', json.name, { path: '/' , maxAge: 28800, httpOnly: false})
      
      });
    });
  };
  return (
    <div><br></br>
      <div><h1>Your name is: </h1><br/> <h3>{name}</h3></div>
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          value="Generate"
        />
      </form><br/>
    </div>
  );
};

export default Name; /* the default that will export from this file */
