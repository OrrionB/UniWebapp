import React from "react";
import { useState } from "react";

const Stats = (props) => {
    const [stat, setStats] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/stats", {
            method: "GET",
    }).then((response) => { 
        response.json().then((json) => {
            console.log(json);
            setStats(json);
        });
    });
};
  
return (
    <div> 
        <div className="stats"> 
        <span id="header"> Your Stats are: </span><br></br>
        <span>STR: {stat[0]}</span><br></br>
                <span>DEX: {stat[1]}</span><br></br>
                <span>CON: {stat[2]}</span><br></br>
                <span>INT: {stat[3]}</span><br></br>
                <span>WIS: {stat[4]}</span><br></br>
                <span>CHR: {stat[5]}</span><br></br>
        <form onSubmit={handleSubmit}>
            <input
            type = "submit"
            value = "Generate Stats"
            />
        </form><br></br>
        </div>
       </div>
  );
};

export default Stats; 