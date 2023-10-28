import jwt from 'jsonwebtoken'
import { UserModel } from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

// Calculate the expiration time
// const cookie_expire_date = new Date();
// expirationDate.setMonth(expirationDate.getMonth() + 1);
const cookie_expire_date = 30 * 60 * 60 * 24;
const TOKEN_SECRET = process.env.TOKEN_SECRET || ''


export const createUser = async (req,res,next) => {
    let userID = await UserModel.count() + 1;
    // const userID = 1001
    const {
        name,
        lastName,
        username,
        password,
        job,
        experiance,
        firstPhoneNumber,
        secondNumber,
        province,
        aboutuser
        } = req.body;
    const imageUrlPath = req.file?.path;


    // if missed field then send an error experiance
    console.log('this is console up');
    // console.log(!name, !lastName, !username, !password, !job, !experiance, !firstPhoneNumber, !secondNumber, !province, !aboutuser) 
    if (!name || !lastName || !username || !password || !job || !experiance || !firstPhoneNumber || !secondNumber || !province || !aboutuser) return res.status(400).json({message: "لطفا خانه های خالی را پور کنید"})


    try {
    const isUsername = await UserModel.findOne({username: username})
    if(isUsername) return res.status(400).json({message:"Username already exist"})
    const isPhoneNumberOne = await UserModel.findOne({phoneNumber1: firstPhoneNumber})
    if(isPhoneNumberOne) return res.status(400).json({message:"Phone Number 1 already exist"})
    const isPhoneNumber2 = await UserModel.findOne({phoneNumber2: secondNumber})
    if(isPhoneNumber2) return res.status(400).json({message:"Phone Number 2 already exist"})
    // // hash the password
    const hashPassword = await bcryptjs.hash(password, 12)
    
    // else save data
    const newUser = new UserModel({
        name,
        lastName,
        username,
        password: hashPassword,
        job,
        experiance,
        phoneNumber1: firstPhoneNumber,
        phoneNumber2: secondNumber,
        profileImage: imageUrlPath,
        province,
        personalInfo: aboutuser,
        id: userID
    })
    await newUser.save();
    return res.status(200).json({message: "User successfully inseted", user: newUser})

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Something went wrong", error: error})
    }
}

export const loginUser = async (req,res) => {
    console.log('hello world');
    const {username,password} = req.body;
    try {
        const user = await UserModel.findOne({username: username}).select("+password")
        // console.log(user.select("-password"));
        if(!user) return res.status(400).json({success:false, message:"User not exist"})
        const isPasswordCorrect = await bcryptjs.compare(password, user.password)
        if(!isPasswordCorrect) return res.status(400).json({success:false, message:"wrong password"})

        const token = jwt.sign({id:user._id,username:user.username},TOKEN_SECRET,{
            // expiresIn: cookie_expire_date.setMonth(cookie_expire_date.getMonth() + 1)
            expiresIn: cookie_expire_date
        })

        res.cookie('ourauthtoken',token,{
            httpOnly: true,
            maxAge:  cookie_expire_date,
            expiresIn:  cookie_expire_date
        })

        return res.status(200).json({message:"Success", user})

    } catch (error) {
        console.log(error);
    }
}


// import { getDataFromToken } from '@/helper/getDataFromToken';
// import getdata

export const getUser = async (req,res) => {
    const data = req.data
    if(!data) return res.status(400).json({message:"Cradential filed"})
   try {
    const user = await UserModel.findOne({_id: data?.id}).select('-password')
    return res.status(200).json({success: true,user})
   } catch (error) {
    console.log('login route get method error');   
    throw new Error(error.message)
   }
}

// c:\Users\Sanaullah Mobini\Desktop\findworker\frontend\src\app\api\users\logout\route.js

export const logout = async (req,res) => {
    // const token = req.cookies.ourauthtoken || ''
    // console.log('this is backend token',req.cookie("ourauthtoken"));
    console.log('this is backend logout function token',req.cookies.ourauthtoken);

    req.cookies.ourauthtoken = ''
//    const abc = req.cookie('ourauthtoken',"",{
//         httpOnly: true,
//        
//     })
    res.cookie('ourauthtoken','',{
        httpOnly: true,
        maxAge: new Date(0),
        expiresIn:  new Date(0)
    })

    return res.status(200).json({message:"successfully logout"})
}

// get all user for showing on the table
export const getAllUsers = async (req,res,next) => {
    let page = parseInt(req.query.page) || 1
    let limit = parseInt(req.query.limit) || 8
    try {
        const user = await UserModel.find().limit(limit*1).skip((page - 1) * limit).select('-password').exec();
        // console.log('this is user value',user);
        const count = await UserModel.countDocuments()
        const currentPage = page
        const totalPages = Math.floor((count + limit - 1) / limit)
        return res.status(200).json({user,totalPages:totalPages, currentPage:currentPage})
    } catch (error) {
        console.log(error);
        next(error.message)
    }
}

// get single user by username
export const getSingleUsername = async (req,res,next) => {
    const {username} = req.params || ''
    console.log(username);
    try {
        const user = await UserModel.findOne({username:username})
        if(!user) return res.status(404).json({message:`There is no user with that ${username} username`})

        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        next(error.message)
    }
}


// Search user based on specific rule 
export const searchUser = async (req,res) => {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 8
   try {
    let job = req.query.job
    let province = req.query.province
    
    console.log('defjobdef',job);
    console.log("abcince",province);
    
    if(job && province){
        console.log('this is called');
        const userLength = await UserModel.find({$and: [{job:job},{province:province}]})
        const user = await UserModel.find({$and: [{job:job},{province:province}]}).limit(limit*1).skip((page-1)*limit).exec()
        // console.log(user);
        const count = userLength.length
        const currentPage = page
        const totalPages = Math.floor((count + limit - 1) / limit)
        if(!user.length) return res.status(400).json({message:"No result"})
        return res.status(200).json({user,message:"Success",totalPages:totalPages, currentPage:currentPage})
    }else{
        const userLength = await UserModel.find({$or: [{job:job},{province:province}]})
        console.log('hello world');
            // const user = await UserModel.find({$or: [{job:job},{province:province}]}).limit(limit*1).skip((page-1)*limit).exec()
        const user = await UserModel.find({$or: [{job:job},{province:province}]}).limit(limit*1).skip((page-1)*limit).exec()        
        const count = userLength.length
        const currentPage = page
        const totalPages = Math.floor((count + limit - 1) / limit)
        if(!user.length) return res.status(400).json({message:"No resultsss"})
        
        return res.status(200).json({user,message:"Success",totalPages:totalPages, currentPage:currentPage})
    }
   } catch (error) {
    
   }
}