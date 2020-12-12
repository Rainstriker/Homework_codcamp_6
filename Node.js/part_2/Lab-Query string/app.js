const express = require('express');
const router = require('./userRoute.js');
const app = express();

const userRoute = require('./userRoute');
app.use('/user', userRoute);

const students = [
  { name: 'sonter', age: 19 },
  { name: 'nat', age: 30 },
  { name: 'tle', age: 14 },
]

app.get('/stduent/:id', function (req, res) {
  if (req.params.id === 0) {
    res.send(students[0])
  } else if (req.params.id === 1) {
    res.send(students[1])
  } else if (req.params.id === 2) {
    res.send(students[2])
  } else {
    res.status(404).send({ message: 'User not found' })
  }
})



app.listen(3000)