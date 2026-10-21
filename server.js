const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes/index.js')
const port = 5000;
const db = require('./config/db');
const bodyParser = require('body-parser');
const app = express();
db();

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', routes);

app.listen(port, (err) => {
    if(!err) {
        console.log(`server started on http://localhost:${port}`);
    }
});