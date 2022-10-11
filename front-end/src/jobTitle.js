import React from "react";
import "./App.css";
import { useState } from "react";

const Job = (props) => {
  const [job, setJob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/job", {
      method: "GET",
    }).then((response) => {
      response.json().then((json) => {
        console.log(json);
        setJob(json.job);
      });
    });
  };
  return (
    <div>
      <div>Your job is {job}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          value="Generate job"
        />
      </form>
    </div>
  );
};

export default Job; /* the default that will export from this file */
