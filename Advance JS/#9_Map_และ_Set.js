//#1 ให้ arr เป็น Array
//สร้าง function ชื่อ unique(arr) ให้คืนค่าเป็น unique items ของ arr 
function unique(arr) {
  /* your code */
  let uniArr = new Set(arr)
  let str = '';
  let len = uniArr.size;
  for (let value of uniArr) {
    len--
    str += value
    if (len > 0) str += ', ';
  }
  return str;
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];

alert( unique(values) ); // Hare, Krishna, :-O


teachers
teachers


//#2 Anagram เป็นตัวอักษรที่มีจำนวนตัวอักษรแต่ละตัวที่เท่ากัน แต่เรียงไม่เหมือนกัน ( Optional )
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const isEqualLen = (word1, word2) => {
  return word1.length === word2.length;
}


function strToSet(str) {
  return new Set(str);
}

const loopChar = (word1, word2) => {
  let checkNum = 0;
  for (let i of word1) {
    for (let j of word2) {
      if (i !== j) continue;
      checkNum++;
    }
  }
  return checkNum === word1.size;
}

const isAnagram = (words1, words2) => {
  let upper1 = words1.toUpperCase();
  let upper2 = words2.toUpperCase();
  if( loopChar(
    strToSet(upper1),
    strToSet(upper2)
    ) 
  ) {
      return true;
    }
  return false;
}

const aclean = (arr) => {
  let group1 = [];
  let group2 = [];
  let check = new Set();
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if ( !isEqualLen (arr[i], arr[j]) ) continue;
      if ( !isAnagram (arr[i], arr[j])) continue;
      if ( check.has(arr[i]) || check.has(arr[j]) ) continue; 
      group1.push(arr[i]);
      group2.push(arr[j]);
      check.add(arr[i]);
      check.add(arr[j]);
    }
  }
  return `\"${group1.toString()}\" or \"${group2.toString()}\"`
}

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"





//#3 เราได้ array จาก map.keys() แต่ไม่สามารถใช้ push ได้
//	เราจะทำยังไงให้ keys.push สามารถทำงานได้
let map = new Map();

map.set("name", "John");

//let keys = map.keys();
let keys = Array.from(map.keys()); //edited

// Error: keys.push is not a function
keys.push("more");