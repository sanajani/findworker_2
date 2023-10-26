import dotenv from 'dotenv'
dotenv.config();
import mongoose from 'mongoose';

async function connectDB() {
    try {
        const db = await mongoose.connect(process.env.MONGO_URL|| 'mongodb://localhost:27017/findworker',{
            useNewUrlParser : true,
            useUnifiedTopology: true
        })
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log('Failed to connect to MongoDB',error);
    }
}

export default connectDB