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
const [characterSaved, setCharacterSaved] = useState(false);
const [alreadyExists, setAlreadyExists] = useState(false);
const [pleaseComplete, setPleaseComplete] = useState(false);


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
      if (response.response === 'character saved'){
        setCharacterSaved(true)
        setAlreadyExists(false)
        setPleaseComplete(false)
      } else if (response.response === 'character already exists'){
        setCharacterSaved(false)
        setAlreadyExists(true)
        setPleaseComplete(false)
      } else {
        setCharacterSaved(false)
        setAlreadyExists(false)
        setPleaseComplete(true)
      }
})))
  }


  return (
    <div>
        {!userIsAuthenticated && <h4>Login to save and load your characters.</h4>}
        {userIsAuthenticated && <button onClick = {handleSubmit}> save </button>}
        <div>{characterSaved && <p3> Your character has been saved, reload the page to view it!</p3>}</div>
        <div>{alreadyExists && <p3> Oops, looks like you already saved this character</p3>}</div>
        <div>{pleaseComplete && <p3> randomise all parts of your character before saving!</p3>}</div>
    </div>
    
  );
};

export default Save; /* the default that will export from this file - this can be referred to in the app.js */