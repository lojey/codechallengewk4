# codechallengewk4
SUMMARY 
This is an application, Flatdango, that allows a user to purchase movie tickets from the theater.

Flatdango

Flatiron Movie Theater is open for business! Flatdango is an application that allows a user to purchase movie tickets from the theater. This project fetches movie data from a local JSON server and enables users to view movie details and buy tickets.

Table of Contents
Installation
Usage
Project Structure
Features
Bonus Features
Extra Bonus
Contributing


Installation
Clone the repository:

bash
git clone 
cd flatdango
Install JSON server:

bash
npm install -g json-server
Start the JSON server:

bash
json-server --watch db.json
Open index.html in your browser to view the application.


Usage
When the page loads, the first movie's details, including its poster, title, runtime, showtime, and available tickets, are displayed.
A list of all movies is displayed on the left side of the page.
Click on a movie in the list to see its details.
Click the "Buy Ticket" button to purchase a ticket. The number of available tickets will decrease accordingly.
Project Structure
graphql
flatdango/


-db.json            # JSON file serving as the local database
-index.html         # HTML file for the project
-index.js         # JavaScript file for DOM manipulation and event handling
- styles.css         # CSS file for styling the project
=README.md          # This README file

Features
View Movie Details: See the details of the first movie when the page loads.
List of Movies: See a list of all movies on the left side of the page.
Buy Ticket: Buy a ticket for a movie and see the number of available tickets decrease.
Bonus Features
Click on Movie: Click on a movie in the list to see its details.
Indicate Sold Out: When a movie is sold out, change the button text to "Sold Out" and update the film item in the list by adding a class of sold-out.
Extra Bonus
Persist Ticket Purchase: When a ticket is purchased, persist the updated number of tickets_sold on the server using a PATCH request.


Contributing
Fork the repository.
Create your feature branch:
bash

git checkout -b feature/my-new-feature
Commit your changes:
bash
git commit -m 'Add some feature'
Push to the branch:
bash
git push origin feature/my-new-feature
Open a pull request.
