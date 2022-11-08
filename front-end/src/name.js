import React from "react";
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
