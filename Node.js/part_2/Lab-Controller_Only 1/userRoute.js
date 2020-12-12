var express = require('express')
var router = express.Router()

//a
router.get('/static', function (req, res) {
  res.send('Hello World')
})

//b
router.get('/staticJSON', function (req, res) {
  res.send(JSON.stringify({text: 'Hello World'}))
})

//c
router.get('/echo', function (req, res) {
  const text = req.query.text;
    res.send(text);
})

//d
router.get('/plus', function (req, res) {
  var a = Number(req.query.a)
  var b = Number(req.query.b)
    res.send(String(a + b));
})

//e
router.get('/plusByJSON', function (req, res) {
  const myJSON = req.query.jsonText;
  const myObj =  JSON.parse(myJSON);
  res.send(String(myObj.a + myObj.b));
})

//f
router.get('/plus/:a/:b', function (req, res) {
  var a = Number(req.params.a)
  var b = Number(req.params.b)
  res.send(String(a + b))
})

//g
router.get('/checkEvenNumber/:x', (req, res) => {
  const x = Number(req.params.x);
  res.send((x % 2 === 0) ? "True" : "False");
});

module.exports = router
