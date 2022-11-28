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
    let collectedID = document.getElementById('characterOptions').options[characterIndex +1].id.split('$')
    let characterArray = collectedID[0].slice(0,-1).split(',')
    let characterStats = collectedID[1].slice(1).slice(0,-1).split(',').map(function(str) { return parseInt(str)})
    let characterFact = collectedID[2].slice(1).slice(0,-1)
    let characterFact2 = collectedID[3].slice(1).slice(0,-1)
    let characterFact3 = collectedID[4].slice(1)
    // let characterStats = document.getElementById('characterOptions').options[characterIndex +1].label
    // console.log(document.getElementById('characterOptions').options[characterIndex +1].id)

    console.log(characterArray)
    // console.log(characterStats)
    // console.log(characterFact)
    // console.log(characterFact2)
    // console.log(characterFact3)

    let savedCharacter = ({
      class: characterArray[0],
      race: characterArray[1],
      name: characterArray[2],
      job: characterArray[3],
      username: characterArray[4],
      fact: characterFact,
      fact2: characterFact2,
      fact3: characterFact3,
      stats: characterStats
        })

    console.log(savedCharacter)

    fetch("http://localhost:5000/load", {
      // mode: 'no-cors',
      method: "POST",
      headers: { "Content-Type": "application/json" ,
      withCredentials: true
      },
      body: JSON.stringify(savedCharacter)
     
      // ,body: JSON.stringify(savedCharacter)
    }).then((response) => response.json().then((response => {
      console.log(response.docs[0].class)

  cookies.set('chosenClass', response.docs[0].class, { path: '/' , maxAge: 28800, httpOnly: false})
  cookies.set('race', response.docs[0].race, { path: '/' , maxAge: 28800, httpOnly: false})
  cookies.set('name', response.docs[0].name, { path: '/' , maxAge: 28800, httpOnly: false}) 
  cookies.set('job', response.docs[0].job, { path: '/' , maxAge: 28800, httpOnly: false})
  cookies.set('fact', response.docs[0].fact, { path: '/' , maxAge: 28800, httpOnly: false})
  cookies.set('fact2', response.docs[0].fact2, { path: '/' , maxAge: 28800, httpOnly: false})
  cookies.set('fact3', response.docs[0].fact3, { path: '/' , maxAge: 28800, httpOnly: false})
  cookies.set('stats', response.docs[0].stats, { path: '/' , maxAge: 28800, httpOnly: false})
  window.location.reload(false);
})))
  }
  useEffect(() => {
    fetchRacesHandler();
  }, [])


async function fetchRacesHandler() {
let username = {username: cookies.get('username')}

  fetch("http://localhost:5000/preload", {
      // mode: 'no-cors',
      method: "POST",
      headers: { "Content-Type": "application/json" ,
      withCredentials: true
      },body: JSON.stringify(username)
    }).then((response) => response.json().then((response => {
      setSavedCharacters(response.docs)
    })))}
 
    if (!savedCharacters) {
      return null
  }
  
  return (
    <div>
    <div>
    <div class="custom-select">
      {userIsAuthenticated && <select onChange= {handleSubmit} id='characterOptions'>
      <option selected="">Choose a character to load</option>
      {
        savedCharacters.map(character => (
          <option value ='' id={[character.class,character.race, character.name, character.job, character.username,'$',character.stats,'$',character.fact,'$', character.fact2,'$', character.fact3]} key={character.id}>{character.name}</option>
        ))}
      </select>}
    </div>
    </div> 
    </div>

    
  );
};

export default Load; /* the default that will export from this file - this can be referred to in the app.js */