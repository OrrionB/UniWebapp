import React from "react";
import "./App.css";
import { useState } from "react";

const Name = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Prevent default stops the page refreshing on the submit of the button push */
    fetch("http://localhost:5000/name", {
      method: "GET",
    }).then((response) => {
      response.json().then((json) => {
        console.log(json);
        setName(json.name);
      });
    });
  };
  return (
    <div><br></br>
      <div>Your name is: {name}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          value="Generate name"
        />
      </form><br></br>
    </div>
  );
};

export default Name; /* the default that will export from this file */
