const express = require('express');
const {
    getAllUsers,
    getAllCategories,
    getAllSubCategories,
    getAllItems,
    getMasterInventory
} = require('./controller.js');
const app = express();
const cors = require("cors"); 
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Hello, world');
})

app.get('/users', (req, res) => {
    getAllUsers()
      .then(data => res.json(data))
      .catch(err => res.status(500).send(err));
  });

app.get('/categories', (req, res) => {
    getAllCategories()
      .then(data => res.json(data))
      .catch(err => res.status(500).send(err));
  });

app.get('/subcategories', (req, res) => {
    getAllSubCategories()
        .then(data => res.json(data))
        .catch(err => res.status(500).send(err));
  });
    
app.get('/items', (req, res) => {
    getAllItems()
        .then(data => res.json(data))
        .catch(err => res.status(500).send(err));
  });

app.get('/master', (req, res) => {
    getMasterInventory()
        .then(data => res.json(data))
        .catch(err => res.status(500).send(err));
  });
  
app.all('*', (req, res) => {
    res.status(400).send('<h1>Endpoint does not exist :(</h1>')
});

module.exports = app;













