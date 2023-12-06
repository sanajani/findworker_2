import conversationModel from '../models/conversation.model.js'

// create or post conversation
export const createConversation = async (req,res,next) => {
    const {senderId,reciverId} = req.body
    try {
        const newConversation = new conversationModel({
            members:[senderId, reciverId]
        })
        const savedConversation = await newConversation.save()
        return res.status(200).json({success: true, savedConversation})
    } catch (error) {
        console.log(error);
        next(error.message)
    }
}

// get conversations
export const getConversations = async (req,res,next) => {
    const userId = req.params.userId
    console.log('hello world', userId);
    try {
        const conversation = await conversationModel.find({
            members:{$in :[userId]}
        })
        return res.status(200).json(conversation)
    } catch (error) {
        console.log(error);
        next(error.message)
    }
}
