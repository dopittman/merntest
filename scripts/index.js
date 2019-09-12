const express = require('express');
const path = require('path');
const fetch = require("node-fetch");

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
});

app.get('/express/test', (req, res)=>{

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    return res.send(json)})
  .catch(err => console.log(err))
});

app.get('/express/gifs', (req, res)=>{
  const baseURL = '<*****API URL/API KEY*****>';

  fetch(baseURL).
  then(response => response.json())
  .then(json => {
    console.log(json)
    return res.send(json)
  })
  .catch(err => console.log(err))
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`App is listening on port ${PORT}`);
});

