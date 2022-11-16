import React from 'react';
import Name from "../name";
import Race from "../race";
import Job from "../jobTitle";
import Fact from "../funFact1";
import Fact2 from "../funfact2";
import Fact3 from "../funfact3";
import Stats from "../stats"

function GenPage() {

    return (
      <div id="genDiv">
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
  
  </div>
  
    );
  }
  
  export default GenPage;