const express = require('express');
const router = express.Router();
const categoryControllers = require('../controllers/Category');
const passport = require('passport');

const authentication = passport.authenticate('jwt', { session: false });

router.get('/', authentication, categoryControllers.getAllCategory);
router.post('/add', authentication, categoryControllers.addCategory);
router.put('/update/:id', authentication, categoryControllers.updateCategory);
router.delete('/remove/:id', authentication, categoryControllers.removeCategory);


module.exports = router;