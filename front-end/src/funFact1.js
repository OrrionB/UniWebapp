import React from "react";
import { useState } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

if (cookies.get('fact') === undefined){
  cookies.set('fact','', { path: '/' , maxAge: 28800, httpOnly: false})
}

const Fact = (props) => {
  const [fact, setFact] = useState(cookies.get('fact'));

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Prevent default stops the page refreshing on the submit of the button push */
    fetch("http://localhost:5000/facts", {
      method: "GET",
    }).then((response) => {
      response.json().then((json) => {
           setFact(json.fact);
           cookies.set('fact', json.fact, { path: '/' , maxAge: 28800, httpOnly: false})
      });
    });
  };
  /* This is the return of the above, it takes the data that was pulled in the fetch request and puts it into the webpage
  when you push the generate button */

  return (
    <div>
      <div><h1>Your character's first fun fact is: </h1><br/> <h3>{fact}</h3></div>
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          value="Generate"
        />
      </form><br/>
    </div>
  );
};

export default Fact; /* the default that will export from this file - this can be referred to in the
app.js file as Job and it will pull this function & button */