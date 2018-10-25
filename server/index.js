const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const couchesController = require('./couchesController');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
    console.log('connected to database');
}).catch(error => {
    console.log('error with massive', error)
})

app.get('/api/couches', couchesController.getCouches);
app.post('/api/couches', couchesController.postCouch);

const port = 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}🦍`)
})