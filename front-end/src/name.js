import React from "react";
import "./App.css";
import { useState } from "react";

const Name = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/name", {
      //this is the address of the server where we want to post
      method: "GET", // this is the method (ie post/get/delete)
    }).then((response) => {
      response.json().then((json) => {
        console.log(json);
        setName(json.name);
      });
    });
  };
  return (
    <div>
      <div>Your name is {name}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          value="Generate name"
        />
      </form>
    </div>
  );
};

export default Name; /* the default that will export from this file */
