const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class{
    registerValidator(req, res, next){
        return [
            check('email')
                .isEmail()
                .withMessage('Please enter a valid email address'),
            check('name')
                .not()
                .isEmpty()
                .withMessage('Please enter a name'),
            check('password')
                .not()
                .isEmpty()
                .withMessage('Please enter a password'),
        ]
    }

    loginValidator(req, res, next){
        return [
            check('email')
                .isEmail()
                .withMessage('Please enter a valid email address'),
            check('password')
                .not()
                .isEmpty()
                .withMessage('Please enter a password'),
        ]
    }
}