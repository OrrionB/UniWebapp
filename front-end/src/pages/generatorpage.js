import React from 'react';
import Name from "../name";
import Race from "../race";
import Job from "../jobTitle";
import Fact from "../funFact1";
import Fact2 from "../funfact2";
import Fact3 from "../funfact3";
import Stats from "../stats";
import Save from "../save"
import Class from "../class"
import Load from "../load"
import barbarian from '../pages/classImages/barbarian.png';
import bard from '../pages/classImages/bard.png';
import cleric from '../pages/classImages/cleric.png';
import druid from '../pages/classImages/druid.png';
import fighter from '../pages/classImages/fighter.png';
import monk from '../pages/classImages/monk.png';
import paladin from '../pages/classImages/paladin.png';
import ranger from '../pages/classImages/ranger.png';
import rogue from '../pages/classImages/rogue.png';
import sorcerer from '../pages/classImages/sorcerer.png';
import warlock from '../pages/classImages/warlock.png';
import wizard from '../pages/classImages/wizard.png';

function GenPage() {


  return (
    <div id="genDiv">
    <div id="desktop">
        <h1>The classes:</h1>
        <h4 id="taglineHover">Hover over each one to learn more about it.</h4>
        <h4 id="taglineClick">Click on each one to learn more about it.</h4>
        <div class="row">

          <div class="column">
            <h2 class="classTitle">Barbarian</h2>
            <div class="container">
              <img src={barbarian} alt="Art of a barbarian character"></img>
              <div class="overlay">
                <div class="text"><p>Filled with their destructive rage and primal instincts, the barbarian is the class you choose if you want to be the meat shield in the front line dealing great amounts of damage. Who needs a shield when you can stand your foes’ puny attacks with your hardened skin and/or high evasiveness?</p></div>
              </div>
            </div>

            <h2 class="classTitle">Fighter</h2>
            <div class="container">
            <img src={fighter} alt="Art of a fighter character"></img>
              <div class="overlay">
                <div class="text"><p>What does a fighter do best? Well, fight of course. A really versatile class, as it can work in numerous ways. Add the fighting style and you can choose to have a one handed weapon accompanied by a shield, have a two handed weapon, two one handed ones (dual wielding), a ranged weapon and more! Once you’ve got that decided, ready yourself to start demolishing your foes, be it with your mighty strength or dexterous precision!</p></div>
              </div>
            </div>

            <h2 class="classTitle">Rogue</h2>
            <div class="container">
            <img src={rogue} alt="Art of a rogue character"></img>
              <div class="overlay">
                <div class="text"><p>Let’s get shady, grab a dagger and start stabbing. Rogues excel at sneaking around, scouting ahead, being dexterous and about everything you would expect a thief to be good at. In dungeons, they can help their party by deactivating traps or opening locked doors. Don’t expect them to wear much armor, nor be able to carry heavy stuff; but were your task to need some delicacy or swashbuckling, you’ve found the right person.</p></div>
              </div>
            </div>
          </div>

          <div class="column">
            <h2 class="classTitle">Bard</h2>
            <div class="container">
            <img src={bard} alt="Art of a bard character"></img>
              <div class="overlay">
                <div class="text"><p>A true jack of all trades; a bard can cover great amounts of ground when speaking about what they are able to do. A performer at heart, an inspiration to its allies, but above all a foul-mouthed to its foes. With their great charisma, their voice becomes its greatest weapon.</p></div>
              </div>
            </div>

            <h2 class="classTitle">Monk</h2>
            <div class="container">
            <img src={monk} alt="Art of a monk character"></img>
              <div class="overlay">
                <div class="text"><p>Martial artists who can channel their Ki to do impressive feats as if they were magic users. No armor is necessary, just dexterity and the power of your mind. Deflect missiles thrown at you, changing the target to your enemies, move at the speed of the wind and fill your foes’ faces with a flurry blows.</p></div>
              </div>
            </div>

            <h2 class="classTitle">Sorcerer</h2>
            <div class="container">
            <img src={sorcerer} alt="Art of a sorcerer character"></img>
              <div class="overlay">
                <div class="text"><p>Due to some random or pre-established occurrence, magic runs through you. This means you can “cheat” in a certain way to be able to use magic at will, instead of having to learn how to cast it. Sorcerers are also equipped with a pool of magic they get their sorcery points from, letting them twist spells to their will in different ways.</p></div>
              </div>
            </div>
          </div>

          <div class="column">
            <h2 class="classTitle">Cleric</h2>
            <div class="container">
            <img src={cleric} alt="Art of a cleric character"></img>
              <div class="overlay">
                <div class="text"><p>As well as with bards, clerics cover a wide amount of possibilities depending on the god you choose to follow. They are high spirited servants of their deities and follow their domains to choose a way of life. Both a warrior and spellcaster, they are able to cover practically any role in a party. Depending on their subclass, their Channel Divinity ability acts in different ways, granting direct powers from their gods.</p></div>
              </div>
            </div>

            <h2 class="classTitle">Paladin</h2>
            <div class="container">
            <img src={paladin} alt="Art of a paladin character"></img>
              <div class="overlay">
                <div class="text"><p>A paladin is a person guided by an oath, their force of will and devotion so strong they are granted the ability to cast spells to smite their foes. They fight for justice and righteousness, with the idea of following their oath and ideals to the very end. For this, they use heavy armor to be front liners and protect their allies.</p></div>
              </div>
            </div>

            <h2 class="classTitle">Warlock</h2>
            <div class="container">
            <img src={warlock} alt="Art of a warlock character"></img>
              <div class="overlay">
                <div class="text"><p>Warlocks make pacts with extremely powerful beings, who don’t mind lending small amounts of their huge power reserves. However, it all comes with a price: There’s a reason this entity decided to accept the pact, and you might need to do some stuff to maintain the accord. Decide whether you want to have a big spellbook full of incantations, a strange summonable weapon or weird servants. Will you perish in the way to becoming an eldritch master?</p></div>
              </div>
            </div>
          </div>

          <div class="column">
            <h2 class="classTitle">Druid</h2>
            <div class="container">
            <img src={druid} alt="Art of a druid character"></img>
              <div class="overlay">
                <div class="text"><p>Preservers of balance and nature’s warriors, the druids aid their party members by using great support spells, as well as heavy damage dealing ones. They speak the language of the flora and fauna, and can also shapeshift into a wide amount of beasts for combat or situational purposes.</p></div>
              </div>
            </div>

            <h2 class="classTitle">Ranger</h2>
            <div class="container">
            <img src={ranger} alt="Art of a ranger character"></img>
              <div class="overlay">
                <div class="text"><p>A natural explorer seeking adventures, who on their way found a special hatred towards a certain beast or monster. Able to master any fighting style as long as they don’t involve heavy weapons or armor. Spellcasters by default, due to their connection with nature and/or the Feywild, they are excellent scouts and allies to have by your side.</p></div>
              </div>
            </div>

            <h2 class="classTitle">Wizard</h2>
            <div class="container">
            <img src={wizard} alt="Art of a wizard character"></img>
              <div class="overlay">
                <div class="text"><p>Wizards decide to go in adventures to further their knowledge. The great world in front of them has thousands of spells for you to learn and master. With a spellbook at hand, they will look for or buy them to become a greater spellcaster. Just transcribe them to the book and you’ll understand why wizards are such a versatile class. The amount of spells they can learn greatly surpasses all other classes’ lists.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>



        <div id="mobile">
          <h1>The classes:</h1>
          <h4 id="taglineHover">Hover over each one to learn more about it.</h4>
          <h4 id="taglineClick">Click on each one to learn more about it.</h4>
          <div class="row">

            <div class="column">
              <h2 class="classTitle">Barbarian</h2>
              <div class="container">
                <img src={barbarian} alt="Art of a barbarian character"></img>
                <div class="overlay">
                  <div class="text"><p>Filled with their destructive rage and primal instincts, the barbarian is the class you choose if you want to be the meat shield in the front line dealing great amounts of damage. Who needs a shield when you can stand your foes’ puny attacks with your hardened skin and/or high evasiveness?</p></div>
                </div>
              </div>

              <h2 class="classTitle">Fighter</h2>
              <div class="container">
              <img src={fighter} alt="Art of a fighter character"></img>
                <div class="overlay">
                  <div class="text"><p>What does a fighter do best? Well, fight of course. A really versatile class, as it can work in numerous ways. Add the fighting style and you can choose to have a one handed weapon accompanied by a shield, have a two handed weapon, two one handed ones (dual wielding), a ranged weapon and more! Once you’ve got that decided, ready yourself to start demolishing your foes, be it with your mighty strength or dexterous precision!</p></div>
                </div>
              </div>

              <h2 class="classTitle">Rogue</h2>
              <div class="container">
              <img src={rogue} alt="Art of a rogue character"></img>
                <div class="overlay">
                  <div class="text"><p>Let’s get shady, grab a dagger and start stabbing. Rogues excel at sneaking around, scouting ahead, being dexterous and about everything you would expect a thief to be good at. In dungeons, they can help their party by deactivating traps or opening locked doors. Don’t expect them to wear much armor, nor be able to carry heavy stuff; but were your task to need some delicacy or swashbuckling, you’ve found the right person.</p></div>
                </div>
              </div>
            </div>

            <div class="column">
              <h2 class="classTitle">Bard</h2>
              <div class="container">
              <img src={bard} alt="Art of a bard character"></img>
                <div class="overlay">
                  <div class="text"><p>A true jack of all trades; a bard can cover great amounts of ground when speaking about what they are able to do. A performer at heart, an inspiration to its allies, but above all a foul-mouthed to its foes. With their great charisma, their voice becomes its greatest weapon.</p></div>
                </div>
              </div>

              <h2 class="classTitle">Monk</h2>
              <div class="container">
              <img src={monk} alt="Art of a monk character"></img>
                <div class="overlay">
                  <div class="text"><p>Martial artists who can channel their Ki to do impressive feats as if they were magic users. No armor is necessary, just dexterity and the power of your mind. Deflect missiles thrown at you, changing the target to your enemies, move at the speed of the wind and fill your foes’ faces with a flurry blows.</p></div>
                </div>
              </div>

              <h2 class="classTitle">Sorcerer</h2>
              <div class="container">
              <img src={sorcerer} alt="Art of a sorcerer character"></img>
                <div class="overlay">
                  <div class="text"><p>Due to some random or pre-established occurrence, magic runs through you. This means you can “cheat” in a certain way to be able to use magic at will, instead of having to learn how to cast it. Sorcerers are also equipped with a pool of magic they get their sorcery points from, letting them twist spells to their will in different ways.</p></div>
                </div>
              </div>
            </div>

            <div class="column">
              <h2 class="classTitle">Cleric</h2>
              <div class="container">
              <img src={cleric} alt="Art of a cleric character"></img>
                <div class="overlay">
                  <div class="text"><p>As well as with bards, clerics cover a wide amount of possibilities depending on the god you choose to follow. They are high spirited servants of their deities and follow their domains to choose a way of life. Both a warrior and spellcaster, they are able to cover practically any role in a party. Depending on their subclass, their Channel Divinity ability acts in different ways, granting direct powers from their gods.</p></div>
                </div>
              </div>

              <h2 class="classTitle">Paladin</h2>
              <div class="container">
              <img src={paladin} alt="Art of a paladin character"></img>
                <div class="overlay">
                  <div class="text"><p>A paladin is a person guided by an oath, their force of will and devotion so strong they are granted the ability to cast spells to smite their foes. They fight for justice and righteousness, with the idea of following their oath and ideals to the very end. For this, they use heavy armor to be front liners and protect their allies.</p></div>
                </div>
              </div>

              <h2 class="classTitle">Warlock</h2>
              <div class="container">
              <img src={warlock} alt="Art of a warlock character"></img>
                <div class="overlay">
                  <div class="text"><p>Warlocks make pacts with extremely powerful beings, who don’t mind lending small amounts of their huge power reserves. However, it all comes with a price: There’s a reason this entity decided to accept the pact, and you might need to do some stuff to maintain the accord. Decide whether you want to have a big spellbook full of incantations, a strange summonable weapon or weird servants. Will you perish in the way to becoming an eldritch master?</p></div>
                </div>
              </div>
            </div>

            <div class="column">
              <h2 class="classTitle">Druid</h2>
              <div class="container">
              <img src={druid} alt="Art of a druid character"></img>
                <div class="overlay">
                  <div class="text"><p>Preservers of balance and nature’s warriors, the druids aid their party members by using great support spells, as well as heavy damage dealing ones. They speak the language of the flora and fauna, and can also shapeshift into a wide amount of beasts for combat or situational purposes.</p></div>
                </div>
              </div>

              <h2 class="classTitle">Ranger</h2>
              <div class="container">
              <img src={ranger} alt="Art of a ranger character"></img>
                <div class="overlay">
                  <div class="text"><p>A natural explorer seeking adventures, who on their way found a special hatred towards a certain beast or monster. Able to master any fighting style as long as they don’t involve heavy weapons or armor. Spellcasters by default, due to their connection with nature and/or the Feywild, they are excellent scouts and allies to have by your side.</p></div>
                </div>
              </div>

              <h2 class="classTitle">Wizard</h2>
              <div class="container">
              <img src={wizard} alt="Art of a wizard character"></img>
                <div class="overlay">
                  <div class="text"><p>Wizards decide to go in adventures to further their knowledge. The great world in front of them has thousands of spells for you to learn and master. With a spellbook at hand, they will look for or buy them to become a greater spellcaster. Just transcribe them to the book and you’ll understand why wizards are such a versatile class. The amount of spells they can learn greatly surpasses all other classes’ lists.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Class />
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
          <Load />
        </div>
        <div>
          <Save />
        </div>
        <div>
          <p3> All images are copyrighted by <a href="https://dnd.wizards.com/race">Wizards of the Coast</a></p3>
        </div>
        <br></br>
        <br></br>
        <br></br>
  </div>
    );
  }
  
  export default GenPage;