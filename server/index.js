/* For this to work, you need to run 'npm install express -g' */
const express = require('express');
const menu = require('./routes/menu.js');
const port = 3000;
let app = express();

app.use(express.json());

/* This routes you around */
app.route('/menu')
    .get(menu.get);
 
/* At which port the server is on */
app.listen(port, () => {
    console.log('Server is up, lets make pizzas!');
});