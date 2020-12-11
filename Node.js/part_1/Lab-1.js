//ใช้ setTimeout เพื่อให้ console.log(‘a’) เมื่อเวลาผ่านไป 1 วินาที
//(ต่อจากข้อ 1) เมื่อ console.log(‘a’) เสร็จ ให้ทำการ console.log(‘b’) เมื่อเวลาผ่านไป 1 วินาที
//(ต่อจากข้อ 2) เมื่อ console.log(‘b’) เสร็จ ให้ทำการ console.log(‘c’) เมื่อเวลาผ่านไป 1 วินาที
//(ต่อจากข้อ 3) เมื่อ console.log(‘c’) เสร็จ ให้ทำการ console.log(‘d’) เมื่อเวลาผ่านไป 1 วินาที

setTimeout(() => {
  console.log('a');
  setTimeout(() => {
    console.log('b');
    setTimeout(() => {
      console.log('c');
      setTimeout(() => {
        console.log('d')
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)

//slide 32
//ทำ ใช้ setTimeout เพื่อให้ console.log(input) เมื่อเวลาผ่านไป 1 วินาที เป็น Promise ที่ชื่อ function ว่า setTimeoutAndLog(input) แล้วลองเรียกใช้ดู
//ใช้ Promise จากข้อที่ 1 แล้วทำให้สามารถได้ผลลัพท์แบบเดียวกันกับ Lab ก่อนหน้า 
//ผ่านไป 1 วินาทีแล้ว console.log(‘a’)
//ผ่านไป 1 วินาทีแล้ว console.log(‘b’)
//ผ่านไป 1 วินาทีแล้ว console.log(‘c’)
//ผ่านไป 1 วินาทีแล้ว console.log(‘d’)

const setTimeoutAndLog = input =>  {
  return new Promise( (rs, rj) => {
    setTimeout(() => {
      console.log(input);
      rs()
    }, 1000)
  })  
}


setTimeoutAndLog('a'
).then(() => { 
  return setTimeoutAndLog('b');
  }).then(() => { 
    return setTimeoutAndLog('c');
    }).then(() => {
      return setTimeoutAndLog('d');
    })

//slide 36
//ใช้ async/await แล้วทำให้สามารถได้ผลลัพท์แบบด้านล่าง
//ผ่านไป 1 วินาทีแล้ว console.log(‘a’)
//ผ่านไป 1 วินาทีแล้ว console.log(‘b’)
//ผ่านไป 1 วินาทีแล้ว console.log(‘c’)
//ผ่านไป 1 วินาทีแล้ว console.log(‘d’)

const setTimeoutAndLog1 = async (a, b, c, d) => {
  try {
    await setTimeoutAndLog(a);
    await setTimeoutAndLog(b);
    await setTimeoutAndLog(c);
    await setTimeoutAndLog(d);

  } catch(error) {
    console.log(error);
  }
}

setTimeoutAndLog1('a', 'b', 'c', 'd');