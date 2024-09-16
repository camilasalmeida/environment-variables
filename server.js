//Next, we want to import the dotenv package into our server.js.
//Environment variables should always be at the top of your server.js file.
//Next, we need a place to store our environment variables, create a `.env` at the root of our project.
//We're going to define the our environment variables in this file `.env`, as key value pairs. 
//Remember that this code is being executed by node in our terminal. It's not running in a browser, so people visiting our app won't be able to see our environment variables.
//Create .gitignore file. This specifies intencionally untracked files to ignore. This is a file that is located in the roots of this project directory.

require('dotenv').config()       //.config() : This means that we don't need to assign this to a variable like we did with Express. This line of code is placing all of the environment variables that we need on an object.
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('The server is running!');
});






app.listen(4000, () => {
    console.log('Listening on port 4000');
    console.log(`Your secret is ${process.env.SECRET_PASSWORD}`)
});