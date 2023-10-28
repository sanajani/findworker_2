import mongoose from 'mongoose';


const ConversationSchema = mongoose.Schema({
    members:{
        type: Array
    }
},{timestamps:true})

const conversationModel = mongoose.model("conversations",ConversationSchema)

export default conversationModel