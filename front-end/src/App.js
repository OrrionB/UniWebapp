import "./App.css";
import Name from "./name";
import Race from "./race";
import Job from "./jobTitle";
import Fact from "./funFact1";
import Fact2 from "./funfact2";
import Fact3 from "./funfact3";
import Stats from "./stats"
import Login from "./login"
import User from "./user"
// import logo from "../public/Images/logo/LogoGenPCDiceShadow-removebg-preview.png";


//This allows user input to effect the page in real time
function App() {


  //This takes the user inputted data, and compares it to the data in the database, which sends back a...
  //response if it is A) correct, B) the user has input an incorrect password C) the user has input an incorrect username
  

  return (
    <div>
       <div>
        <Login />
      </div>
      <div>
        <Name />
      </div>
      <div>
        <Race />
      </div>
      <div>
        <Job />
      </div>
      <div>
        <Fact />
      </div>
      <div>
        <Fact2 />
      </div>
      <div>
        <Fact3 />
      </div>
      <div>
        <Stats />
      </div>
      <div>
        <User />
      </div>
      <div>
        <footer></footer>
      </div>

</div>

  );
}

export default App;
