import React from "react";
import { useState } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();


const Stats = (props) => {
console.log(cookies.get('stats'))
    const [stat, setStats] = useState(cookies.get('stats'))

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/stats", {
            method: "GET",
    }).then((response) => { 
        response.json().then((json) => {
         setStats(json);
         cookies.set('stats', json, { path: '/' , maxAge: 28800, httpOnly: false}
         )
        });
    });
};
  
return (
    <div> 
        <div className="stats"> 
        <span id="header"> <h1>Your Stats are: </h1></span> <h3>
                <span>STR: {stat[0]}</span><br/>
                <span>DEX: {stat[1]}</span><br/>
                <span>CON: {stat[2]}</span><br/>
                <span>INT: {stat[3]}</span><br/>
                <span>WIS: {stat[4]}</span><br/>
                <span>CHR: {stat[5]}</span><br/> </h3>
        <form onSubmit={handleSubmit}>
            <input
            type = "submit"
            value = "Generate"
            />
        </form><br/>
        </div>
       </div>
  );
};

export default Stats; 