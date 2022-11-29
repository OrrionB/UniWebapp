import React from "react";
import { useState, useEffect } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();





  
  /* This is the return of the above, it takes the data that was pulled in the fetch request and puts it into the webpage
  when you push the generate button */
  let authorised = cookies.get('authorised')
  
  const Load = (props) => {
    
    if (authorised === 'false'){
      authorised = false}
    
    if (authorised === 'true'){
      authorised = true
    }


const [savedCharacters, setSavedCharacters] = useState();
const [showList, setShowList] = useState(false);
const [userIsAuthenticated, setUserIsAuthenticated] = useState(authorised);

// fetch("http://localhost:5000/load_amount", {
//       // mode: 'no-cors',
//       method: "GET",
//       headers: { "Content-Type": "application/json" ,
//       withCredentials: true
//       }.then((response) => response.json().then((response => {
//         console.log(response)})))})


  const handleSubmit = (event) => {
    event.preventDefault();
    let characterIndex = document.getElementById('characterOptions').selectedIndex - 1

    fetch("http://localhost:5000/load", {
      // mode: 'no-cors',
      method: "GET",
      headers: { "Content-Type": "application/json" ,
      withCredentials: true
      }
    }).then((response) => response.json().then((response => {
      

  cookies.set('chosenClass', response.docs[characterIndex].class, { path: '/' , maxAge: 28800, httpOnly: false})
  cookies.set('race', response.docs[characterIndex].race, { path: '/' , maxAge: 28800, httpOnly: false})
  cookies.set('name', response.docs[characterIndex].name, { path: '/' , maxAge: 28800, httpOnly: false}) 
  cookies.set('job', response.docs[characterIndex].job, { path: '/' , maxAge: 28800, httpOnly: false})
  cookies.set('fact', response.docs[characterIndex].fact, { path: '/' , maxAge: 28800, httpOnly: false})
  cookies.set('fact2', response.docs[characterIndex].fact2, { path: '/' , maxAge: 28800, httpOnly: false})
  cookies.set('fact3', response.docs[characterIndex].fact3, { path: '/' , maxAge: 28800, httpOnly: false})
  cookies.set('stats', response.docs[characterIndex].stats, { path: '/' , maxAge: 28800, httpOnly: false})
  window.location.reload(false);
})))
  }
  useEffect(() => {
    fetchRacesHandler();
  }, [])

let loadableCharacters
async function fetchRacesHandler() {
  fetch("http://localhost:5000/load", {
      // mode: 'no-cors',
      method: "GET",
      headers: { "Content-Type": "application/json" ,
      withCredentials: true
      }
    }).then((response) => response.json().then((response => {
      loadableCharacters = response.docs
      setSavedCharacters(loadableCharacters)
      console.log(loadableCharacters)
    })))}
 
    if (!savedCharacters) {
      return null
  }
  
  return (
    <div>
    <div>
    <div class="custom-select">
      {userIsAuthenticated && <select onChange= {handleSubmit} id='characterOptions'>
      <option id="loadCharacterDropdown" selected="">Choose a character to load</option>
      {
        savedCharacters.map(character => (
          <option value ='' id={character.name} key={character.id}>{character.name}</option>
        ))}
      </select>}
    </div>
    </div> 
    </div>

    
  );
};

export default Load; /* the default that will export from this file - this can be referred to in the app.js */