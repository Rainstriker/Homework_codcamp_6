//#1 ถ้าเรามี Object 
//ให้เขียน Destrcutring assignment ที่ให้
//property ที่ชื่อ name ไปอยู่ในตัวแปร name
//property ที่ชื่อ years ไปอยู่ในตัวแปร age
//property ที่ชื่อ isAdmin ไปอยู่ในตัวแปร isAdmin (ให้เป็น false ถ้าไม่มีค่าให้กำหนด)

let user = {
  name: "John",
  years: 30
};

let {
  name,
  years:age,
  isAdmin = false
} = user;

//#2ถ้าเรามี Object ชื่อ salaries
//ให้สร้าง function topSalary(salaries) ที่คืนค่าชื่อคนที่มีเงินเดือนสูงสุด
//      ถ้า salaries ไม่มีข้อมูลให้คืนค่าเป็น null
//     ถ้าสูงสุดมีหลายคน ก็ให้คืนใครก็ได้สักคน
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const topSalary = salaries => {
  let mostSalary = 0;
  let whomMostSalary = null;
  
  for (name in salaries) {
    if (salaries[name] > mostSalary) {
      mostSalary = salaries[name];
      whomMostSalary = name;
    }
  }
  return whomMostSalary;
}

//#3 การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป
let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
//answer: none until animal.eat() execute

//#4 การเขียนโค๊ดแบบนี้ กระเพราะจะถูกแชร์กันจะแก้ไขยังไงดี 
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
//  __proto__: hamster <<<<<<<remove this code to fix it
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple