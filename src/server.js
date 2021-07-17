const express=require('express');
const app = express();
const cors=require('cors');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(cors());

const db = require('./master/db');
          require('./baserouter')
          (app);

module.exports = app;