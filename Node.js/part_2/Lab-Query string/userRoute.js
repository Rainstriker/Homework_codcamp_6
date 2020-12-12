var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.send(req.query.id)
})

router.get('/add/:a/:b', function (req, res) {
  var a = req.params.a
  var b = req.params.b
  res.send(a + b)
})


module.exports = router
