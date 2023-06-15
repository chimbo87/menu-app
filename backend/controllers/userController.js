import asyncHandler from 'express-async-handler'
//@discription  authUser/ send token
// route  POST /api/users/ auth
// 

const authUser= asyncHandler(async(req, res)=>{ 
  res.status(200).json({message:'authUser'})
});


//register new user
// route POST / api/ users
// @access Public
const registerUser= asyncHandler(async(req, res)=>{ 
  res.status(200).json({message:'Register new user'})
});

//logout user
// route POST / api/ users/ logout
// @access Public

const logoutUser= asyncHandler(async(req, res)=>{ 
  res.status(200).json({message:'logout user'})
});

//get user profile
// GET/ api/users/profile
//@access private
const getUserProfile= asyncHandler(async(req, res)=>{ 
  res.status(200).json({message:'get user profile'})
});

//update user profile
// Put / api/users/profile
//@access private
const updateUserProfile= asyncHandler(async(req, res)=>{ 
  res.status(200).json({message:'Update user profile'})
});

export{
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
};