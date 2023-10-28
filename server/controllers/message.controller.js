import messageModel from '../models/message.model.js';

// post message
export const createMessage = async (req,res,next) => {
    const {text,sender,conversationId} = req.body;
    try {
        const newMessage = messageModel({text,sender,conversationId})
        const savedMessage = await newMessage.save();
        return res.status(200).json({message:"Success",savedMessage})
    } catch (error) {
        console.log(error);
        next(error.message)
    }
}

// get message
export const getMessages = async (req,res,next) => {
    const conversationId = req.params.conversationId
    try {
        const message = await messageModel.find({
            conversationId:conversationId
        })
        return res.status(200).json({success:true , message})
    } catch (error) {
        console.log(error);
        next(error.message)        
    }
}

