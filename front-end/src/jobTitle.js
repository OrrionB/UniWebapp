import React from "react";
import "./App.css";
import { useState } from "react";

const Job = (props) => {
  const [job, setJob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Prevent default stops the page refreshing on the submit of the button push */
    fetch("http://localhost:5000/job", {
      method: "GET",
    }).then((response) => {
      response.json().then((json) => {
        console.log(json);
        setJob(json.job);
      });
    });
  };
  /* This is the return of the above, it takes the data that was pulled in the fetch request and puts it into the webpage
  when you push the generate button */

  return (
    <div>
      <div>Your character's job is: {job}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          value="Generate job"
        />
      </form><br></br>
    </div>
    
  );
};

export default Job; /* the default that will export from this file - this can be referred to in the
app.js file as Job and it will pull this function & button */
