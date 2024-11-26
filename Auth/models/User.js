import mongoose from "mongoose";
import { type } from "os";
 const userSchema= new mongoose.Schema({
    username:{
        type:String,
        
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    role:{
        type:String,
        enum: ['admin','user'],
        default:'user'
    }
 },{
    timestamps:true
 })


 const UserModel= mongoose.model('user',userSchema)

 export default UserModel