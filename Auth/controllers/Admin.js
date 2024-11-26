import UserModel from "../models/User.js"


// get
const GetUsers = async(req,res)=>{
    try{
       const users=await UserModel.find()
       if(!users){
        return res.status(404).json({success:false,message:"no users found"})
       }
       return res.status(200).json({success:true,users})
    }catch(error){
        console.log('login error',error);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}

// delete
const deleteuser = async(req,res)=>{
    try{
        const userId = req.params.id;
        const user = await UserModel.findByIdAndDelete(userId);
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        return res.status(200).json({message:"user deleted successfully"})
    }catch(error){
        console.log('login error',error);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}
export {GetUsers,deleteuser}