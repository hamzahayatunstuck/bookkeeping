const {body} = require('express-validator');

const registerValidator = [
    body('name').notEmpty().withMessage('Name is Required'),
    body('email').notEmpty().withMessage('Email is Required').isEmail().withMessage('Invalid Email'),
    body('password').notEmpty().withMessage('Password is Required').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('number').notEmpty().withMessage('Number is Required'),
]

const loginValidator = [
    body('email').notEmpty().withMessage('Email is Required').isEmail().withMessage('Invalid Email'),
    body('password').notEmpty().withMessage('Password is Required').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
]

module.exports = { registerValidator, loginValidator };