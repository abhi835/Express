import { asyncHandler } from "../utils/asyncHandlers";
 import {ApiError} from "../utils/ApiError.js"
 import {User} from "../models/user.models.js"
 const registerUser = asyncHandler(async(req,res)=>{
   const {fullName,email,username,pasword}=req.body

   //validation
   if(
         [fullName,username,email,pasword].some((field)=>field?.trim()==="")
   ){
    throw new ApiError(400,"All fields are required")
   }

  const existedUser=await User.findOne({
    $or:[{username},{email}]
   })
    

 })

 export {
    registerUser
 }