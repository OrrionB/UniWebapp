import React from "react";
import { useState } from "react";

const Fact2 = (props) => {
  const [fact2, setFact2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/fact2", {
      method: "GET",
    }).then((response) => {
      response.json().then((json) => {
        console.log(json);
        setFact2(json.fact2);
      });
    });
  };
  /* This is the return of the above, it takes the data that was pulled in the fetch request and puts it into the webpage
  when you push the generate button */

  return (
    <div>
      <div><h1>Your character's 2nd fun fact is: </h1><br/> <h3>{fact2}</h3></div>
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          value="Generate"
        />
      </form><br/>
    </div>
  );
};

export default Fact2; /* the default that will export from this file - this can be referred to in the app.js */
