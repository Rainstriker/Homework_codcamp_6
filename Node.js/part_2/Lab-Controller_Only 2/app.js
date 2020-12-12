var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
	extended: true
}))
var userRoute = require('./userRoute')
app.use('/user', userRoute)

app.listen(3000)