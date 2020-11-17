//#1 จากโค๊ดต่อไปนี้มีการสร้าง new Rabbit() ขึ้นมา
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true

//ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();
Rabbit.prototype = {}; // ได้true เพราะprototypeบรรทัดนี้ไม่ได้เปลี่ยนค่าprototypeก่อนหน้า
alert( rabbit.eats ); // true

//ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false; 

alert( rabbit.eats ); // ? // ได้false เพราะprototypeเปลี่ยนค่าที่มีอยุ่เดิม

//ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats; 

alert( rabbit.eats ); // ? // ได้true ดึงค่าจากprototype

//ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // ? // ได้undefined prototypeถูกลบ

//#2 ถ้าเราต้องการสร้างใช้ constructor ของ obj เราสามารถเขียนแบบนี้ได้ไหม
let obj2 = new obj.constructor();
//answer: ทำได้