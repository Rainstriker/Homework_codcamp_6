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

app.get('/picture.png', (req, res, next) => {
  res.setHeader('Content-type','text/html')
  res.send('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg" />');
})

app.get('*', (req, res, next) => {
  res.status(404).send('404');
});

app.listen(3000)