var express = require('express')
var router = express.Router()

router.get('/add/:a/:b', function (req, res) {
  var a = Number(req.params.a)
  var b = Number(req.params.b)
  res.send(String(a + b))
})

module.exports = router
