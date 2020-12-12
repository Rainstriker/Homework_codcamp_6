var express = require('express')
var router = express.Router()

app.get('/:x', (req, res) => {
  const x = Number(req.params.x);
  if (x % 2 === 0) {
      res.status(200).send();
  }
  else {
      res.status(400).send();
  } 
});

let arr = [];

app.post('/number/:x', (req, res) => {
  const x = Number(req.params.x);
  arr.push(x);
  res.send(arr);
});

app.delete('/number/:x', (req, res) => {
  const x = Number(req.params.x);
  filterArr = arr.filter((value) => value !== x);
  arr = [...filterArr];
  res.send(arr);
});

app.put('/number/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const index = arr.indexOf(a);
  if(index < 0) {
      res.status(400).send('Cannot edit the array, number not found.')
  }
  else {
      arr.splice(index, 1, b);
  }
  res.send(arr);
});

app.post('/countFields', (req, res) => {
  res.send(String(Object.keys(req.body).length));
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


module.exports = router
