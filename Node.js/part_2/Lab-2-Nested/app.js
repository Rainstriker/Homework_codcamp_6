const app = require('express');
const animalsRouter = require('animalsRouter');

app.use('/', animalsRouter);

app.listen(3000);

module.exports = animalsRouter;