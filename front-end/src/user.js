import React from "react";
import "./App.css";
import { useState } from "react";

const User = (props) => {
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/user", {
      method: "GET",
    }).then((response) => {
      response.json().then((json) => {
        console.log(json);
        setUser(json.user);
      });
    });
  };
  /* This is the return of the above, it takes the data that was pulled in the fetch request and puts it into the webpage
  when you push the generate button */

  return (
    <div>
      <div><h1>user</h1><br/> <h3>{user}</h3></div>
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          value="Generate"
        />
      </form><br/>
    </div>
  );
};

export default User; /* the default that will export from this file - this can be referred to in the app.js */