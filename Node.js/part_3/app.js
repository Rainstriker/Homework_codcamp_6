const express = require('express');
const app = express();
const { 
  Course,
  getAllCourse,
  getCourseById,
  addToDataBase,
  findCourseIndex,
  deleteFromDataBaseById,
  updateDataId
} = require('./Course.js');

app.get('/', (req, res, next) => {
  res.send(getAllCourse());
});

app.post('/add/:teacher/:course/:price', (req, res, next) => {
  let teacher = req.params.teacher;
  let course = req.params.course;
  let price = req.params.price;
  const obj = {
    id: 0,
    teacher: teacher,
    course: course,
    price: price
  }
  addToDataBase(obj);
  res.send(obj);
});

app.listen(3000);