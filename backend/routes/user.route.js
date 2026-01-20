import express from 'express';
import {
  checkLoginStatus,
  login,
  logout,
  register,
  updateProfile,
  getAllUsers,
  promoteToAdmin,
  demoteFromAdmin,
} from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { singleUpload } from '../middlewares/mutler.js';
import isAdmin from '../middlewares/isAdmin.js';

const router = express.Router();

router.post('/register', singleUpload, register);
router.post('/login', login);
router.get('/logout', isAuthenticated, logout);
router.put('/update-profile/:id', isAuthenticated, singleUpload, updateProfile);
router.get('/check-login-status', isAuthenticated, checkLoginStatus);

router.get('/all', isAuthenticated, isAdmin, getAllUsers);
router.put('/promote/:userId', isAuthenticated, isAdmin, promoteToAdmin);
router.put('/demote/:userId', isAuthenticated, isAdmin, demoteFromAdmin);

export default router;
