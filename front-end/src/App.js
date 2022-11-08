import Name from "./name";
import Race from "./race";
import Job from "./jobTitle";
import Fact from "./funFact1";
import Fact2 from "./funfact2";
import Fact3 from "./funfact3";
import Stats from "./stats"
import Login from "./login"

//This allows user input to effect the page in real time
function App() {

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
        <footer></footer>
      </div>

</div>

  );
}

export default App;
