import React from "react";
import { useState } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Class = (props) => {

const choosing = () => {
  let classIndex = document.getElementById('classOptions').selectedIndex
  let chosenClass = document.getElementById('classOptions').options[classIndex].id
  cookies.set('chosenClass', chosenClass, { path: '/' , maxAge: 28800, httpOnly: false})

  console.log({'class':chosenClass})
  console.log(cookies.get('chosenClass'))
     }
      
  return (
    <div>
    <h1> Choose your class:</h1>
    <div class="custom-select">
      <select onChange={choosing} id='classOptions'>
        <option selected="">{cookies.get('chosenClass')}</option>
        <option value="1" id='Barbarian'>Barbarian</option>
        <option value="2"id='Bard'>Bard</option>
        <option value="3"id='Cleric'>Cleric</option>
        <option value="4"id='Druid'>Druid</option>
        <option value="5"id='Fighter'>Fighter</option>
        <option value="6"id='Monk'>Monk</option>
        <option value="7"id='Paladin'>Paladin</option>
        <option value="8"id='Ranger'>Ranger</option>
        <option value="9"id='Rogue'>Rogue</option>
        <option value="10"id='Sorcerer'>Sorcerer</option>
        <option value="11"id='Warlock'>Warlock</option>
        <option value="12"id='Wizard'>Wizard</option>
      </select>
    </div>
    </div> 
    )
};

export default Class; /* the default that will export from this file */
