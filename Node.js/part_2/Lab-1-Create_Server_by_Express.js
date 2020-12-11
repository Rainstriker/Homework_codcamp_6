//วิธีสร้าง Server ด้วย Express
//โจทย์ Lab 1
//ที่เว็บ http://localhost:5555/bye
//ให้แสดงคำว่า “Good bye”

const expressFunction = require('express');
const app = expressFunction();


app.get('/bye', (req, res) => {
  res.send('Good bye');
})

app.listen(5555);