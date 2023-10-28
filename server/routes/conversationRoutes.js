import express from 'express'
const router = express.Router();
import {createConversation,getConversations} from '../controllers/conversation.controller.js';

// new conversation
router.get('/:userId', getConversations)
router.post('/', createConversation)

// get conv of user


export default router