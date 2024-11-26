import UserModel from "../models/User.js"
import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken'
//register
const register = async(req,res)=>{
    try{
           const {username,email,password}=req.body
           const existUser=await UserModel.findOne({email})
     if(existUser){
        return res.status(402).json({success:false,message:"User already exist please login"})
           }
      const hasePassword=await bcryptjs.hashSync(password,10)
      const newUser = UserModel({
        username,email,password:hasePassword
      })
      await newUser.save()
      return res.status(200).json({success:true,message:"User register successfullu",user:newUser})
    }catch(error){
        console.log('register error',error)
        return res.status(500).json({success:false,message:"internal server error"})
    }
}

// login
const login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user = await UserModel.findOne({email})
        if(!user){
            return res.status(404).json({success:false,message:"Account not found please regsiter"})
        }
        const isValidpassword = await bcryptjs.compare(password,user.password)
        if(!isValidpassword){
            return res.status(404).json({success:false,message:"Wrong password"})
        }
        const token= jwt.sign({userId:user._id},process.env.JWT_SECRETE)
        res.cookie('token',token,{
            httpOnly: true,
            secure: false,
            maxAge: 25900000
        })
        return res.status(200).json({success:true,message:"user login successfully",user,token})
    } catch(error){
         console.log('login error',error);
         return res.status(500).json({success:false,message:"Internal server error"})
    }
}

//logout
const logout = async(req,res)=>{
    try{
        res.clearCookie('token')
        return res.status(200).json({success:true, message:"Logout successful"})
    }catch(error){
        console.log('login error',error);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}


export {register,login,logout}
