const express = require('express');
const router = express.Router();
const accountControllers = require('../controllers/Account');
const passport = require('passport');

const authentication = passport.authenticate('jwt', { session: false });

router.get('/', authentication, accountControllers.getAllAccount);
router.post('/add', authentication, accountControllers.addAccount);
router.put('/update/:id', authentication, accountControllers.updateAccount);
router.delete('/remove/:id', authentication, accountControllers.removeAccount);


module.exports = router;