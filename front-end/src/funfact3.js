import React from "react";
import "./App.css";
import { useState } from "react";

const Fact3 = (props) => {
  const [fact3, setFact3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/fact3", {
      method: "GET",
    }).then((response) => {
      response.json().then((json) => {
        console.log(json);
        setFact3(json.fact3);
      });
    });
  };
  /* This is the return of the above, it takes the data that was pulled in the fetch request and puts it into the webpage
  when you push the generate button */

  return (
    <div>
      <div>Your character's 3rd fun fact is: {fact3}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          value="Generate Fact 3"
        />
      </form>
    </div>
  );
};

export default Fact3; /* the default that will export from this file - this can be referred to in the app.js */