import React from 'react';

function Home() {
    return (
          <div>
            <div id="aboutSection">
              <h1 id="aboutTitle">About GenPC:</h1>
              <p id="aboutPara">GenPC is designed to help you create fantasy characters. Whether these characters are NPC's or the basis for 
              a more detailed and fully formed character for your table top RPG, that is up to you. Click the button below to find out about each of 
              the twelve different classes, and select one that takes your fancy. Then use our generator tool to learn more about your character. Will 
              you be a runaway princess with a pet crow or a murderous goblin with a particular love for cheese? Who knows! The only thing we need to know is... <br></br><br></br>
              Are you ready to begin your adventure?</p>
            </div>
            <form action='/Generator'>
              <input type="submit" value="I'm ready!" />
            </form>
            </div>
    );
}

export default Home;