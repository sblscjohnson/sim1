const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express()
const massive = require('massive');
const ctrl = require('./controller')

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then((db) => {
  app.set('db', db)
}).then((err) => {
  console.log(err)
});

app.get('/api/inventory', ctrl.getProduct)




let PORT = process.env.SERVERPORT;
app.listen(PORT, () => console.log(`${PORT} finna be lit`)) 