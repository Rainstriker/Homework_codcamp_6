//#1 ในบรรทัดที่มีเลข 1 2 และ 3 จะได้ค่าออกมาเป็นอะไร
let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1)
//output: true

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)
//output: null

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)
//output: undefined

//#2 ช้ __proto__ ในการกำหนด prototype object ดังนี้ 
//		pockets → bed → table → head.
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};



