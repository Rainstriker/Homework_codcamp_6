//-------การสร้าง Object - แบบฝึกหัด
//#1 ให้สร้าง Object แบบ Object Iteral โดยให้กำหนดตัวแปรชื่อ human โดยมี Properties ทั้ง 5 อย่าง
//a. ชื่อของผู้เรียน เป็น String
//b. อายุของผู้เรียนเป็น number
//c. บ้านของตัวเองเป็น String
//d. โสดหรือไม่โสดเป็น boolean
//e. คะแนนความฉลาดของตัวเองเป็น number (เต็ม 10)



//-------Computed Properties - แบบฝึกหัด
//#1 ห้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง 
// จนกว่าจะเจอคำว่า stop และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา
const human = {
  name: 'Pookan',
  age: 25,
  address: 'home',
  'marriage status': false,
  'inteligence point': 10
}

let key = prompt('Enter key:');
let obj = {};
while (key !== 'stop') {
  let value = prompt('Enter value:');
  obj[key] = value;
  key = prompt('Enter key: ');
}
console.log(obj);

//#2 ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง 
//โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย
let nameFruit = prompt('Enter fruit:');
let fruits = {};
while (nameFruit !== 'stop') {
  let quantity = prompt('Enter quantity:');
  if (Number(quantity) > 1) {
    nameFruit = nameFruit + 's';
  }
  fruits[nameFruit] = quantity ;
  nameFruit = prompt('Enter fruit: ');

}
console.log(fruits);

//-------Object - แบบฝึกหัด
//#1 ให้ทำตามคำสั่งต่อไปนี้
//a. สร้าง Object เปล่าขึ้นมา
//b. เพิ่ม properties name เข้าไปและให้ value เป็น “Sonter”
//c. เพิ่ม properties surname เข้าไปและให้ value เป็น “Pakorn”
//d. เปลี่ยน properties name เป็น “Boy”
//e. ลบ properties name ออกจาก Object
let obj = {};
obj = Object.assign(
  {
    name: 'Sonter',
    surname: 'Pakorn'
  },
  obj
);

obj.name = 'boy';
delete obj.name;

//#2 ให้เขียนฟังก์ชันชื่อ isEmpty(obj) โดยจะมี parameters เป็น obj และ 
//ฟังก์ชันนี้จะเช็คว่า obj นี้มี properties ไหม ถ้ามีให้คืนค่า true ถ้าไม่มีให้คืนค่า false
const isEmpty = obj => {
  for (let key in obj) return false;
  return true;
}

//#3 การเขียนข้างล่างต่อไปนี้ Error  ไหม
const user = {
  name: "John"
};

// does it work?
user.name = "Pete";
//answer: yes

//#4 จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงานและมี value เป็นเงินเดือน 
//ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
const sum = obj => {
  let total = 0;
  for (let key in obj) total += obj[key];
  return total;
}

//#5 จงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties นั้นมี value เป็น number ให้คุณ value นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทำอะไร
//before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multiplyNumeric = (obj, times) => {
  for (let key in obj) {
    if (typeof obj[key] === 'number') obj[key] *= times;
  }
}


