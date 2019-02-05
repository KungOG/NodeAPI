/* For this to work, you need to run 'npm install express -g' */
const express = require('express');
const menu = require('./routes/menu.js');
const orders = require('./routes/orders.js');
const cors = require('cors');
const port = 3000;
let app = express();

app.use(express.json());
app.use(cors());

/* This routes you around in menu */
app.route('/menu')
    .get(menu.get);

/* This routes you around in orders*/
app.route('/orders')
    .get(orders.get)
    .post(orders.post)
    .patch(orders.patch);
 
/* At which port the server is on */
app.listen(port, () => {
    console.log('Server is up, lets make pizzas!');
});