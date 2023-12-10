import express from 'express'
const router = express.Router();
import { createUser,loginUser, getUser, logout, updateUser} from '../controllers/user.controller.js';
import { upload } from '../utilities/upload.js';
import { getDataFromToken } from '../helper/getDataFromToken.js';


// /api/signup
router.post('/signup',upload.single('file'),createUser)
// /api/login
router.post('/login',loginUser)
// /api/user
router.get('/user',getDataFromToken,getUser)
// /api/user
router.put('/user/:id',updateUser)
// /api/user
router.get('/user/logout',logout)




export default router