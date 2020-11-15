//#1 สร้าง constructor function ที่ใช้สำหรับสร้าง Calculator โดยต้องมี 3 Methods นี้
//a. read(): รับค่าจาก propmt สองตัว
//b. sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว
//c. mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว
function Calculator() {
  this.read = function() {
    let num1 = prompt('first number');
    let num2 = prompt('second number');
    this.numFirst = Number(num1);
    this.numFirst = Number(num2);
  }
  this.sum = function() {
    return this.numFirst + this.numFirst;
  }
  this.mul = function() {
    return this.numFirst * this.numFirst;  
  }
}

//#2 สร้าง constructor function Accumulator(startingValue)
//a. โดยที่ Object ดังกล่าวควร เก็บผลรวมไว้ใน property ที่มี key ชื่อว่า value, ค่าเริ่มต้นของ key ชื่อ value นี้ คือ startingValue
//b. ฟังก์ชัน read() ควรอ่านค่าจาก propmt() และ เพิ่มค่าที่ใส่เข้ามาใน key ชื่อ value
// พูดง่าย ๆ ก็คือ value คือผลรวมของ prompt โดยเริ่มจาก startingValue


function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    let total = prompt('Enter number');
    this.value += Number(total);
    return this;
  }
}
