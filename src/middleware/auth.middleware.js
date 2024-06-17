import { User } from "../../db/models/user.model.js"
import jwt  from "jsonwebtoken"
import { catchError } from "./../utils/catcherror.js"

export const isAuthenticated = catchError(async(req, res, next) => {
   // token
   let { token } = req.headers

   if(!token) return next(new Error('token is required'))
 
 
   // check prefix
   if(!token.startsWith(process.env.BEARERKEY))  return  next(new Error('token is wrong'))
 
 
   // reassign token
   token = token.split(process.env.BEARERKEY)[1]
  
 
   // decode
   const payLoad = jwt.verify(token, process.env.TOKENKEY)
   
 
   // check user existence
   const user = await User.findById(payLoad.id)
   if (!user) return next(new Error('User Not Found'))

 
   req.user = user
   return next()
})