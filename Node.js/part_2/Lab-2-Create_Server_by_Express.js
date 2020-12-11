//วิธีสร้าง Server ด้วย Express
//โจทย์ Lab 2
//เปลี่ยนมาทำให้รองรับ Post
//เปลี่ยนมาทำให้รองรับ Put
//เปลี่ยนมาทำให้รองรับ Delete

//แสดง ‘dog walk’	ที่ http://localhost:3000/dog/walk/
//แสดง ‘dog play’		ที่ http://localhost:3000/dog/play/
//แสดง ‘cat eat’		ที่ http://localhost:3000/cat/eat/
//แสดง ‘cat sleep’		ที่ http://localhost:3000/cat/sleep/



const expressFunction = require('express');
const app = expressFunction();


app.get('/bye', (req, res) => {
  res.send('Good bye');
})

app.post('/bye', (req, res) => {

})

app.put('/bye', (req, res) => {

})

app.delete('/bye', (req, res) => {

})

app.listen(5555);