//#1 ผลลัพธ์ของความยาว array คืออะไร
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert( fruits.length ); // ?
//output: 4

//#2 ให้ทำตามขั้นตอนต่อไปนี้
//a. สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”
//b. เพิ่ม “Rock-n-Roll” ต่อท้าย
//c. นำค่า Classics ไปทับค่าตรงกลางของ Array
//d. นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array
//e. เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array
let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
console.log(styles);
styles.splice(1, 1, 'Classics');
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift('Rap', 'Reggae');
console.log(styles);

//#3 เขียนฟังก์ชัน sumInput() ที่
//a. ใช้ propmt รับ value มาเก็บใน array
//b. หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข
//c. คำนวณผลรวมของตัวเลขทั้งหมดใน Array
const sumInput = () => {
  let total = [];
  while (true) {
    let value = prompt('enter value');
    let isnum = /^\d+$/.test(value);
    if (isnum) {
      total.push(Number(value));
      continue;
    }
    return total.reduce((total, num) => total + num);
  }
}
sumInput();

//# 4Maximal contiguous subarray (**Optional**)
//ให้เขียนฟังก์ชัน getMaxSubSum(arr) ที่ return ผลรวมของ subarray ที่มากที่สุดที่ติดกัน
//getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
//getMaxSubSum([2, -1, 2, 3, -9]) == 6
//getMaxSubSum([-1, 2, 3, -9, 11]) == 11
//getMaxSubSum([-2, -1, 1, 2]) == 3
//getMaxSubSum([100, -9, 2, -3, 5]) == 100
//getMaxSubSum([1, 2, 3]) == 6 (take all)

const getMaxSubSum = (arr) => {
  let maxSum = 0;
  
  //pointer
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    //find higher value
    for (let j = i; j < arr.length; j++) {
      temp += arr[j];
      if (temp > maxSum) maxSum = temp;
    }
  }
  return maxSum;
}


