import express from "express";

import {
  authUser,
  registerUser,
  getUsers,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getProducts,
  userProducts,
  getBlogs,
  userBlogs
} from "../controllers/userController.js";
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser);
router.get('/',getUsers);
router.post('/auth', authUser);
router.post('/logout', logoutUser);

router
  .route('/profile').get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.get('/products', getProducts);
router.post('/products', userProducts);
router.get('/blogs', getBlogs);
router.post('/blogs', userBlogs);


export default router;