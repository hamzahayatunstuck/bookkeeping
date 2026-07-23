const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { registerValidator, loginValidator } = require('../validators/authValidator');
const upload = require('../middleware/uploadMiddleware');


router.post('/register',upload.single("profilePicture"), registerValidator, register);

router.post('/login', loginValidator, login);

module.exports = router;