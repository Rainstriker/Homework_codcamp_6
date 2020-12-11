const animalsRouter = require('express').Router();

const animals = {
  dog: ['walk', 'play'], 
  cat: ['eat', 'sleep']
};

animalsRouter.use('/', animalsRouter);

animalsRouter.param('animal', (req, res, next) => {
  if(!animals[req.animal]) {
    res.status(404).send();
  } else {
    req.animal = animal;
    next();
  }
})

animalsRouter.get('/animals', (req, res, next) => {
  res.send(animals);
})


animalsRouter.get('/animals/:animal/walk', (req, res, next) => {
  const animal = 'dog';
  res.send(`${req.animal} walk`);
})

animalsRouter.get('/animals/:animal/play', (req, res, next) => {
  const animal = 'dog';
  res.send(`${req.animal} play`);
})
animalsRouter.get('/animals/:animal/eat', (req, res, next) => {
  const animal = 'cat';
  res.send(`${req.animal} eat`);
})

animalsRouter.get('/animals/:animal/sleep', (req, res, next) => {
  const animal = 'dog';
  res.send(`${req.animal} sleep`);
})


module.exports = animalsRouter;
