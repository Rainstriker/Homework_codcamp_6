let num = 1.23456;
alert( Math.floor(num * 100) / 100 );
//คำถามคือจะได้ output ออกมาเป็นเท่าไหร่
//output: 1.23

//#1 ให้เขียนฟังก์ชัน random(min, max) ที่จะ random เลข float ตั้งแต่ min จนถึง max มาให้เรา (ไม่รวม max)
let random = (min, max) => Math.random() * (max - min) + min;
alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
