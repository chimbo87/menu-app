import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import product from '../models/productModel.js';
import blog from '../models/blogModel.js';
import generateToken from '../utils/generateToken.js';
//@discription  authUser/ send token
// route  POST /api/users/ auth
// 

const authUser= asyncHandler(async(req, res)=>{ 
  const {email, password}= req.body;

  const user = await User.findOne({email});
  if (user && (await user.matchPassword(password))){
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email:user.email
    });
  }else{
    res.status(401);
    throw new Error('invalid email or password');
  }
});


//register new user
// route POST / api/ users
// @access Public
const registerUser= asyncHandler(async(req, res)=>{ 
  const {name, email, password} = req.body;
  const userExits = await User.findOne({ email});

  if (userExits){
    res.status(400);
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password
  });

  if (user){
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email:user.email
    });
  }else{
    res.status(400);
    throw new Error('invalid user data');
  }
});
const getUsers= asyncHandler(async(req, res)=>{ 
  try{
      const users =  await User.find({})
      res.status(200).json(users);
  }catch(error){
      console.log(error.message)
      res.status(500).json({message:error.message})
  }
});

//logout user
// route POST / api/ users/ logout
// @access Public

const logoutUser= asyncHandler(async(req, res)=>{ 
  res.cookie('jwt', '', {
    httpOnly:true,
    expires: new Date(0)
  });
  res.status(200).json({message: 'User logged out'})
});

//get user profile
// GET/ api/users/profile
//@access private
const getUserProfile= asyncHandler(async(req, res)=>{ 
    const user = {
      _id: req.user._id,
      name: req.user.name,
      email:req.user.email,
    };
    res.status(200).json(user);

  res.status(200).json({message:'get user profile'})
});

//update user profile
// Put / api/users/profile
//@access private
const updateUserProfile= asyncHandler(async(req, res)=>{ 
 const user = await User.findById(req.user._id);
 if(user){
    user.name= req.body.name || user.name;
    user.email= req.body.email || user.email;
    if(req.body.password){
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email
    })
 }else{
  res.status(400);
   throw new Error('User not found')
 }
});

const getProducts= asyncHandler(async(req, res)=>{ 
  try{
      const products =  await product.find({})
      res.status(200).json(products);
  }catch(error){
      console.log(error.message)
      res.status(500).json({message:error.message})
  }
});

const userProducts= asyncHandler(async(req, res)=>{ 
  try{
    
      const {name, title, price, image} = req.body;
      const Product = await product.create({
        name,
        title,
        price,
        image
      });
      res.status(200).json(Product);
  }catch(error){
      console.log(error.message)
      res.status(500).json({message:error.message})
  }
 
});

const getBlogs= asyncHandler(async(req, res)=>{ 
  try{
      const blogs =  await blog.find({})
      res.status(200).json(blogs);
  }catch(error){
      console.log(error.message)
      res.status(500).json({message:error.message})
  }
});

const userBlogs= asyncHandler(async(req, res)=>{ 
  try{
    
      const { title, description, image} = req.body;
      const Blog = await blog.create({
      
        title,
        description,
        image
      });
      res.status(200).json(Blog);
  }catch(error){
      console.log(error.message)
      res.status(500).json({message:error.message})
  }
 
});

export{
  authUser,
  registerUser,
  logoutUser,
  getUsers,
  getUserProfile,
  updateUserProfile,
  getProducts,
  userProducts,
  getBlogs,
  userBlogs
};