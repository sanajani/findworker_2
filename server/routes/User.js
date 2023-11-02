import express from 'express'
import { getAllUsers, getSingleUsername, getSingleuserById, searchUser } from '../controllers/user.controller.js'
const router = express.Router()

// /api/users/all
router.get('/all',getAllUsers)
// /api/users/all/123
router.get('/all/:username',getSingleUsername)
// getSingleuserById
router.get('/all/userid/:id',getSingleuserById)

router.get('/search',searchUser)


export default router