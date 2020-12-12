const express = require('express');
const app = express();

const animals = {
  dog: {
    name: 'dog',
    behavior: ['walk', 'play']
  }, 
  cat: {
    name: 'cat',
    behavior: ['eat', 'sleep']
  }
};

app.get('/animals', (req, res, next) => {
  res.send(animals);
})


app.get('/animals/dog/walk', (req, res, next) => {
  res.send(`${animals['dog'].name} ${animals['dog'].behavior[0]}`);
})

app.get('/animals/dog/play', (req, res, next) => {

  res.send(`${animals['dog'].name} ${animals['dog'].behavior[1]}`);
  
})

app.get('/animals/cat/eat', (req, res, next) => {

  res.send(`${animals['cat'].name} ${animals['cat'].behavior[0]}`);

})

app.get('/animals/cat/sleep', (req, res, next) => {

  res.send(`${animals['cat'].name} ${animals['cat'].behavior[1]}`);

})

app.listen(3000)