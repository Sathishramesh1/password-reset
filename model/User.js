import  mongoose from 'mongoose';

const UserSchema=new mongoose.Schema({
    email:String,
    password:String
})

const Usermodel=new mongoose.model("User",UserSchema);

export {Usermodel}