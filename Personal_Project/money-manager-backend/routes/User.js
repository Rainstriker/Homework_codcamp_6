const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/User');
const passport = require('passport');

const authentication = passport.authenticate('jwt', { session: false });

router.get('/', authentication, userControllers.getAllUsers);
router.get('/:id', authentication, userControllers.getUserById);

router.post('/register', userControllers.registerUser);
router.post('/login', userControllers.loginUser);

router.put('/:id', authentication, userControllers.updateUser);
router.delete('/:id', authentication, userControllers.deleteUser);

module.exports = router;