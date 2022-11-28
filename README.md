# GenPC ReadMe (Assignment 1 - DDSA)
  
## Pre-Requisites  
This readme assumes that you have the following programmes installed:
- IDE e.g. VS Code
- MongoDB Compass
- Node (version 19.0.1)
- Git

**PLEASE NOTE:**

This ReadMe was written using the built-in terminal in VS Code. It was tested using this terminal on both MacOS and WindowsOS. 

--- 
## Setup & Install

1. Open a terminal on MacOS or PowerShell on Windows.  

2. Navigate (cd) to the folder where you want the application to be stored on your computer.  
> i.e. `$ cd Desktop/Webapp`  

3. Clone the repo into this folder from this link --> (https://github.com/OrrionB/UniWebapp.git) 
> i.e `$ git clone https://github.com/OrrionB/UniWebapp.git`  
  
 4. Open the folder in VS Code. 
  
5. To install the dependencies: 
- Open 2 terminals in VSCode  
- In the first termnial window navigate (cd) to the folder where you installed the webapp and run the command `npm install`.  
> i.e `$ cd Desktop/Webapp`  
>
>`$ npm install`  

- In the second terminal window, navigate to the **front-end** folder inside the repo and again run the command `npm install`.  
> i.e `$ cd Desktop/Webapp/front-end`  
>  
> `$ npm install`
---


## Creating the Database

***Please ensure that the database name and collections names you create exactly match those below.***

Open MongoDB Compass 

Create a Database on `localhost:27017` in MongoDB Compass called **`Webapp_Project`**.  

In **Webapp_Project** please create the following collections:  (All start with capital letters, except for users, which starts with a lower case).
1. **`FunFacts`**
2. **`JobTitles`**
3. **`Names`**
4. **`Races`** 
5. **`CreatedCharacters`** 
6. **`users`**

  
  Into these collections, you can import the corresponding named JSON file from the **`database-jsons`** folder that was included in the repo. The folders `CreatedCharacters` and `users` should be left empty.

---

## Starting the Application  
1. Make sure you have followed the above steps for setup and creation of the database.
2. In the terminal window that is in the directory where you cloned the app, run the command `node index.js`.
3. In the terminal window that is in the **front-end** folder, run the command `npm start`.
4. The app should then initialise, however if it does not - go to 'http://localhost:3000' in your browser.
5. Use the sign up page to create your username and password.
6. Use the login page with the username and password you have just created in order to see the save function on the generator page.
5. Enjoy generating your characters!

---
## Development Team
- Hope Maloney
- Isaac Crawford
- Orrion Barnett

## Application Summary  
Our application allows users to generate a fantasy character sheet upon which they can build their character for fantasy games. 

## Technology Stack
- MongoDB - Database
- Express - Server
- ReactJS - Front End
- Node - Back End Packages
- Javascript - Business Logic
- HTML - Front End
- BootStrap - Front End / Styling
- Trello - Kanban board for project management
- Slack - Team communication
- VS Code - Development Environment
- GitHub - Version Control
---

## Work Approach
### Agile Methodology - Scrum with Kanban
- We agreed on this way of working as a team because our organisation follows agile methodologies while leaving teams room to adapt their ways of working. Scrum with Kanban allows us the freedom to pick up tickets as necessary without having to rigidly stick to ceremonies involved in the Scrum way of working. This in turn allowed us the flexibility to work around our daily work routines and commitments.  
We came up with MoSCow statements (must have, should have, could have, would have) to lead our priorities. Each team member can claim any ticket and is then responsible for completing the work on that ticket. 


### Ceremonies of work
- We have 1 scrum a week due to the time each person can allocate to the project, this allows some progress to be made towards each ticket between scrums and makes the meetings more substatial to extract the maximum value out of the time. The team also held a retrospective at the half way point in the project (October) in order to assess what had gone well so far, what hadn't gone well, and what can we do as individuals and as a team to improve our performance and delivery.

### Work Strategy
- To protect our main branch from changes that may break the application and also to ensure that everyone had visibility of code they had not worked on, we implemented a peer review system. This was put in place in the GitHub repository and required that at least 1 other developer must review and approve the code before it could be merged into our main branch.

### Communication
- We created a team slack channel to facilitate communications between the team & to enable us to share screens / have huddles when needed for programming or debugging. We also provided weekly demonstrations to Martin Cooper to obtain feedback and ensure we were staying on target and correctly focussed. 

---
## Application Overview
The applications main functions are: 
- To inform the user about different classes of fantasy character and enable them to choose their favourite.
- To then enable the user to generate several characteristics about this fantasy character that can be used to build upon.  
- To allow the user to register and log in to access previously generated characters.
  
This application is being developed as a mobile first application. The website will function in a PC browswer, however there will be slight differences in the style, such as the placement and positioning of the navbar. 

## Application Security
As we are utilising a sign up / login system we need to protect against bad actors gaining access to the underlying data. In order to do this we have implemented the following:  
- Sessions
- Hashed Passwords
----
