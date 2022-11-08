# GenPC ReadMe (Assignment 1 - DDSA)
  
## Pre-Requisites  
This readme assumes that you have the following programmes installed:
- IDE e.g. VS Code
- MongoDB Compass
- Node

This ReadMe has been made in a .md format so it can be opened in your IDE previewer for easier reading.

--- 
## Setup & Install
Navigate to the folder where you want the application to be stored on your computer   
> i.e. `$ cd Desktop/Webapp`  

Clone the repo into this folder from this link --> (https://github.com/OrrionB/UniWebapp.git) 
> i.e `$ git clone https://github.com/OrrionB/UniWebapp.git`  
  
Install the dependencies  
1. Open 2 terminal windows.
2. In the first termnial window navigate to the folder where you installed the webapp and run the command `npm install`.  
> i.e `$ cd Desktop/Webapp`  
>
>`$ npm install`  

3. In the second terminal window, navigate to the **front-end** folder inside the repo and again run the command `npm install`.  
> i.e `$ cd Desktop/Webapp/front-end`  
>  
> `$ npm install`
---


## Creating the Database
Create a Database on `localhost:27017` in MongoDB Compass called **`Webapp_Project`**.  
In **Webapp_Project** please create the following collections:  
1. **`FunFacts`**
2. **`JobTitles`**
3. **`Names`**
4. **`Races`**  
  
  Into these collections, you can import the corresponding JSON file from **`database-jsons`**.

---

## Starting the Application  
1. Make sure you have followed the above steps for setup and creation of the database.
2. In the terminal window that is in the directory where you cloned the app, run the command `nodemon`.
3. In the terminal window that is in the **front-end** folder, run the command `npm start`.
4. The app should then initialise, however if it does not - go to 'http://localhost:3000' in your browser.

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

## Work Approach
### Agile Methodology - Scrum with Kanban
- We agreed on this way of working as a team because our organisation follows agile methodologies while leaving teams room to adapt their ways of working. Scrum with Kanban allows us the freedom to pick up tickets as necessary without having to rigidly stick to ceremonies involved in the Scrum way of working. This in turn allowed us the flexibility to work around our daily work routines and commitments.  
We came up with MoSCow statements (must have, should have, could have, would have) to lead our priorities. Each team member can claim any ticket and is then responsible for completing the work on that ticket. 

### Ceremonies of work
We have 1 scrum a week due to the time each person can allocate to the project, this allows some progress to be made towards each ticket between daily scrums and makes the meetings more substatial to extract the maximum value out of the time. The team also held a retrospective at the half way point in the project (October) in order to assess what had gone well so far, what hadn't gone well, and what can we do as individuals and as a team to improve our performance and delivery.