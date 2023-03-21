const asyncHandler = require('express-async-handler');
const generateToken = require('../config/genertaeToken');
const User = require('../Models/userModel')
const registerUser =asyncHandler(async(req,res)=>{
    const {name,email , password , pic}= req.body;
  if(!name||!email||!password)
  {
    res.status(400);
    throw new Error ("please enter all the fields");

  }

  const userExists = await User.findOne({email:email})
  if(userExists)
  {
    res.status(400);
    throw new Error ("user exists");

  }
  const user = await User.create({
    name, email, password, pic
  })
  if(user){
    res.status(201).json({
        _id:user._id,
        name:user.name,
        email: user.email,
        pic:user.pic,
        token:generateToken(user._id),

    });
  }
  else{
    res.status(400);
    throw new Error ("failed to create a user");
  }

    })

    module.exports= {registerUser};