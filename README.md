# NoteTakerExpress
Server side Express Project used to take notes

https://briannasnotetaker.herokuapp.com/

# Project Description
A note taker that allows you to input a title, body, and journal message. Built with Express, the backend is fully funtional.

# User Story
AS A a hard-working individual, I need an application that allows me to store notes in an organized way.
I WANT to be able to load the page and press start that will bring me to the notes page.
I WANT to be able to input messages with Titles, and an option to delete my note when I choose.

# Example of Layout
![Screenshot](/public/assets/images/noteTaker.gif)
![Screenshot](/public/assets/images/noteTaker.png)

  

# How to Use 
1. Open URL https://briannasnotetaker.herokuapp.com/
2. Click the 'Get Started' button.
3. Give your note a title, along with some text.
4. Hit the 'Save' Icon.
5. Go back go see your previous notes by clicking on the column. 
6. To write a new note, click the 'Pencil' icon on top right.
7. To back to home screen, press the 'Note Taker' header in the upper left

# Dependencies Used
* Express

# Task Breakdown
1. Require our dependencies with 'npm init' 'npm install', and npm install express'.
1. Require your npms and defining them to const variables
1. Attach a varaible to the pathname of your database file that will hold your current/new notes.
1. Define express and PORT
    1. Make your public folder static so you're able to use the information within
1. Create a 'get' function for your index.html to display on your browsers via server.
    1. Do the same with your notes.html.
1. When creating a new note, we have to establish an id for the note.
    1. Link your id to an Integer and create a for loop through your database. 
    1. Take the database's current notes and assign them the next highest id.
    1. Push the new note into the database to be held and rendered.
    1. Console log to your user that the note saved properly
1. Create a delete function that will find the assigned id and delete it.
    1. Have a for loop that will find the integer and 'splice' it from the database object.
1. Call the PORT so the server can run. 




# Credits
* Anthony Garza
* Brittany Taylor
* Crystal Ly
* Israel Medina
* Eric Scott

--------------------------------
