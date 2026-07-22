const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

const register =async (req, res) => {
    try {
        const {name, email, password, number} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
       
        const user = await UserModel.create({name, email, password: hashedPassword, number});
        const newUser = {
            name: user.name,
            email: user.email,
            number: user.number,
        }
        res.status(201).json({message: 'User registered successfully', newUser});
    }catch(error){
        console.log(error); 
        res.status(500).json({message: error.message});
    }
};

const login = async(req, res) => {
  try {
    const {email, password} = req.body;
    const user = await UserModel.findOne({email})
   if(!user){
    return res.status(401).json({message: 'Invalid email or password'});
   }
   const isPasswordCorrect = await bcrypt.compare(password, user.password);
   console.log(isPasswordCorrect);
   if(!isPasswordCorrect){
    return res.status(401).json({message: 'Invalid email or password'});
   }
   const token = jwt.sign({id: user._id, name: user.name}, process.env.JWT_SECRET, {expiresIn: '1h'});
   res.status(200).json({message: 'Login successful', token});
  }catch(error){
    console.log(error); 
    res.status(500).json({message: error.message});
  }
};

module.exports = { register, login };