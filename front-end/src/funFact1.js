import React from "react";
import "./App.css";
import { useState } from "react";

const Fact = (props) => {
  const [fact, setFact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Prevent default stops the page refreshing on the submit of the button push */
    fetch("http://localhost:5000/facts", {
      method: "GET",
    }).then((response) => {
      response.json().then((json) => {
        console.log(json);
        setFact(json.fact);
      });
    });
  };
  /* This is the return of the above, it takes the data that was pulled in the fetch request and puts it into the webpage
  when you push the generate button */

  return (
    <div>
      <div>Your character's 1st fun fact is: {fact}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          value="Generate"
        />
      </form><br></br>
    </div>
  );
};

export default Fact; /* the default that will export from this file - this can be referred to in the
app.js file as Job and it will pull this function & button */