import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'


const isAdmin = async(req,res,next)=>{
  try{
       const token=req.cookies.token
       if(!token){
        return res.status(401).json({message:"unauthorized: no token provided"})
       }
       
       const decoded=jwt.verify(token,process.env.JWT_SECRETE)
       const user=await UserModel.findById(decoded.userId)

       
       if(!user){
        return res.status(403).json({message:"unauthorized:user no found"})
       }

       if(user.role!=='admin'){
        return res.status(403).json({success:false,message:"unauthorized:user is not an admin"})
       }
       next()// user admin nhi hai to next kr denge 

  }catch(error){
    console.log('login error',error);
    return res.status(500).json({success:false,message:"Internal server error"})
  }
}
export default isAdmin