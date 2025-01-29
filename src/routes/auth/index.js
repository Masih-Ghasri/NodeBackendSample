const express = require('express');
const router = express.Router();
const controllers = require('./controller');
const validators = require('./validator');

router.post(
    '/register',
    validators.registerValidator(),
    controllers.validate,
    controllers.register
);

router.post(
    '/login',
    validators.loginValidator(),
    controllers.validate,
    controllers.login
)

module.exports = router;