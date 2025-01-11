import express from 'express';
import { 
  checkEmail, 
  registerUser, 
  loginUser, 
  forgotPassword, 
  resetPassword 
} from '../controllers/userController.js';

const router = express.Router();

router.post('/check-email', checkEmail);

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/forgot-password', forgotPassword);

router.post('/reset-password/:token', resetPassword);

export default router;
