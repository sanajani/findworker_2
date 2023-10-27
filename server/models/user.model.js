import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        // required: [true, "Name is Required"],
        trim: true

    },
    lastName: {
        type: String,
        // // required: [true, "LastName is Required"],
        trim: true

    },
    username: {
        type: String,
        // // required: [true, "User Name is Required"],
        unique: [true, "usernamecls should be unique"],
        trim: true

    },
    password:{
        type: String,
        // // required: [true, "Password is Required"],
        trim: true,
        select: false
    },
    job:{
        type: String,
        // // required: [true, "Job is Required"],
        trim: true

    },
    experiance: {
        type: String,
        trim: true
    },
    phoneNumber1: {
        type: String,
        // // required: [true, "PhoneNumber1 is Required"],
        unique: [true, "PhoneNumber1 should be unique"],
        trim: true
    },
    phoneNumber2: {
        type: String,
        // // required: [true, "PhoneNumber2 is Required"],
        unique: [true, "PhoneNumber2 should be unique"],
        trim: true
    },
    profileImage: {
        type: String,
        trim: true
    },
    province: {
        type: String,
        // // required: [true, "Province is Required"],
        trim: true
    },
    personalInfo:{
        type: String,
        // // required: [true, "PersonalInformation is Required"],
        trim: true
    },
    id:{
        type: String
    }
})

// const UserModel = mongoose.models.users || mongoose.model('users', userSchema);
const UserModel =mongoose.model('users',userSchema)

export {UserModel}
