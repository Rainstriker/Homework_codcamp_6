//#1 กำหนดให้ salaries เป็น Object
//ให้เขียนฟังก์ชัน sumSalaries(salaries) ที่คืนค่าเป็นผลผมรวมของเงินเดือน ถ้า salaries ไม่มีสมาชิก ให้คืนค่าเป็น 0
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

let sumSalaries = (salaries = 0) => {
  let op = Object.entries(salaries);
  let totalSalary = op.reduce( (k, v) => k + v[1], 0);
  return totalSalary;
}

alert( sumSalaries(salaries) ); // 650

//#2 ให้เขียนฟังก์ชัน count(obj) ที่คืนค่าเป็นจำนวน properties ใน object
let user = {
  name: 'John',
  age: 30
};

let count = obj => {
  let op = Object.entries(obj);
  let count = 0;
  for (let k of op.keys()) {
    count++;
  }
  return count;
}

alert( count(user) ); // 2