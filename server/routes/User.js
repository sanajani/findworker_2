import express from 'express'
import { getAllUsers, getSingleUsername, searchUser } from '../controllers/user.controller.js'
const router = express.Router()

// /api/users/all
router.get('/all',getAllUsers)
// /api/users/all/123
router.get('/all/:username',getSingleUsername)

router.get('/search',searchUser)


export default router