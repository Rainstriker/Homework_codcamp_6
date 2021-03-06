const Course = [
  {
    id: 1,
    teacher: 'Cuthbert Binns',
    course: 'History of Magic',
    price: 3000
  },
  
  {
    id: 2,
    teacher: 'Charity Burbage',
    course: 'Muggle Studies',
    price: 3500
  },

  {
    id: 3,
    teacher: 'Albus Dumbledore',
    course: 'Transfiguration',
    price: 3200
  },
  {
    id: 4,
    teacher: 'Dolores Umbridge',
    course: 'Defence Against the Dark Arts',
    price: 4500
  },
  {
    id: 5,
    teacher: 'Horace Slughorn',
    course: 'Potions',
    price: 3500
  }
];

const getAllCourse = () => {
  return Course;
}

const getCourseById = (id, elementList) => {
  return elementList.find(element => { 
    return element.id === Number(id);
  });
}

const addToDataBase = instance => {
  if (instance === null) {
    return null;
  } else {
    Course.push(instance);
    updateDataId(Course);
  }
}

const findCourseIndex = (id, elementList) => {
  return elementList.findIndex(element => {
    return element.id === id;
  });
}

const deleteFromDataBaseById = (id, elementList) => {
  const idx = findCourseIndex(id, elementList);
  console.log(idx)
  if(idx !== -1) {
    elementList.splice(idx, 1);
    updateDataId(Course); 
  } else {
    console.log('id not found')
  }
}

const updateCurrentData = (id, instance) => {
  const idx = findCourseIndex(id, Course);
  Object.assign(Course[idx], instance);
  updateDataId(Course);
}

const updateDataId = elementList => {
  for (let i = 0; i < elementList.length; i++) {
    elementList[i].id = i + 1;
  }
}

module.exports = { 
  Course,
  getAllCourse,
  getCourseById,
  addToDataBase,
  findCourseIndex,
  deleteFromDataBaseById,
  updateCurrentData,
  updateDataId
}