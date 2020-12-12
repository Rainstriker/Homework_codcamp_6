const express = require('express');
const app = express();
const { 
  Course,
  getAllCourse,
  getCourseById,
  addToDataBase,
  updateCurrentData,
  deleteFromDataBaseById,
} = require('./Course.js');

//get all data
app.get('/', (req, res, next) => {
  res.send(getAllCourse());
});

//post new data to database
app.get('/add/:teacher/:course/:price', (req, res, next) => {
  let teacher = req.params.teacher;
  let course = req.params.course;
  let price = Number(req.params.price);
  const obj = {
    id: 0,
    teacher: teacher,
    course: course,
    price: price
  }
  addToDataBase(obj);
  res.status(204).send();
});

//update current data
app.get('/update/:id/:teacher/:course/:price', (req, res, next) => {
  let id = Number(req.params.id);
  let teacher = req.params.teacher;
  let course = req.params.course;
  let price = Number(req.params.price);
  const obj = {
    id: 0,
    teacher: teacher,
    course: course,
    price: price
  }
  updateCurrentData(id, obj);
  res.send(getCourseById(id, Course));
});

//delete by id
app.get('/del/:id', (req, res, next) => {
  let id = Number(req.params.id);
  deleteFromDataBaseById(id, Course);
  res.send(getAllCourse());
});

//get data by id
app.get('/:id', (req, res, next) => {
  let id = Number(req.params.id);
  res.send(getCourseById(id, Course));
});



app.listen(3000);