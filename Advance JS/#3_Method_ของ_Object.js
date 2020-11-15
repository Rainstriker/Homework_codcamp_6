//#1 การทำงานของ code ดังกล่าวจะได้อะไรออกมา
let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()
//output: error: Uncaught ReferenceError: Cannot access 'user' before initialization

//#2 การทำงานของ code ดังกล่าวจะได้อะไรออกมา
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // What's the result?
//output:blank alert

//# 3สร้าง object calculator จาก 3 methods นี้:
//read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties.
//sum() คืนค่าผลบวกของ 2 ค่านั้น.
//mul() คืนค่าผลคูณของ 2 ค่านั้น.
let calculator = {
  read() {
    let num1 = prompt('first number');
    let num2 = prompt('second number');
    this.numFirst = Number(num1);
    this.numFirst = Number(num2);
  },
  sum() {
    return this.numFirst + this.numFirst;
  },
  mul() {
    return this.numFirst * this.numFirst;  
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//#4 ให้ Object ชื่อ ladder มี	method ขึ้น และ ลง
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};
//Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

//ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
//ladder.up().up().down().showStep(); // 1



