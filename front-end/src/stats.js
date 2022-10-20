import React from "react";
import { useState } from "react";

const Stats = (props) => {
    const [stat, setStats] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/stats", {
            method: "GET",
    }).then((response) => {
        response.json().then((json) => {
            console.log(json);
            setStats(json.stat);
            console.log("hi")
        });
    });
};
  
return (
    <div> 
        <div> Your Stats are: {stat} </div>
        <form onSubmit={handleSubmit}>
            <input
            type = "submit"
            value = "Generate Stats"
            />
        </form>
       </div>
  );
};

export default Stats; 