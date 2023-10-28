import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { globelError } from './utilities/globelErros.js';
import { routeNotFoundError } from './controllers/routeNotFoundError.js';
import conversationRoute from './routes/conversationRoutes.js';
import messageRoute from './routes/messagesRoutes.js';

// database connection
import connectDB from './db/connectDB.js'
connectDB()

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({credentials:true, origin:"http://localhost:3000"}))
app.use(cookieParser())

// app.use(express.static(''))
app.use(express.static('public'));


const PORT = process.env.PORT || 9001

// api routes
import signupRoute from './routes/signupUserRoute.js'
import userRoute from './routes/User.js';

// add route middleware on app
app.use('/api',signupRoute)
app.use('/api/users',userRoute)
app.use('/api/conversation',conversationRoute)
app.use('/api/messages',messageRoute)

// route not match with api routes
app.all('*',routeNotFoundError)

app.use(globelError)

app.listen(PORT, () => {
    console.log(`this host name http://localhost:${PORT}`);
})