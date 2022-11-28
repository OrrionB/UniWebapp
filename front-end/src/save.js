import React from "react";
import { useState } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Save = (props) => {
  /* This is the return of the above, it takes the data that was pulled in the fetch request and puts it into the webpage
  when you push the generate button */
  let authorised = cookies.get('authorised')
  if (authorised === 'false'){
    authorised = false}
  
  if (authorised === 'true'){
    authorised = true
  }

const [userIsAuthenticated, setUserIsAuthenticated] = useState(authorised);


  const handleSubmit = (event) => {
    let savedCharacter = ({
      class: cookies.get('chosenClass'),
      race: cookies.get('race'),
      name: cookies.get('name'), 
      job: cookies.get('job'),
      fact: cookies.get('fact'),
      fact2: cookies.get('fact2'),
      fact3: cookies.get('fact3'),
      stats: cookies.get('stats'),
      username: cookies.get('username')
    })
    event.preventDefault();
    fetch("http://localhost:5000/save", {
      // mode: 'no-cors',
      method: "POST",
      headers: { "Content-Type": "application/json" ,
      withCredentials: true
      },body: JSON.stringify(savedCharacter)
    }).then((response) => response.json().then((response => {
  console.log(response)})))
  }


  return (
    <div>
        {userIsAuthenticated && <button onClick = {handleSubmit}> Save Character </button>}
    </div>
  );
};

export default Save; /* the default that will export from this file - this can be referred to in the app.js */