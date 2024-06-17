import { User } from "../../../db/models/user.model.js"
import { catchError } from "../../utils/catcherror.js"
import { Message } from "./../../../db/models/message.model.js"

export const sendMessage = catchError(async (req, res, next) => {
  // data
  const { content, receiverId } = req.body

  // check user
  const user = await User.findById(receiverId)

  if(!user) return next(new Error('User Not Found', {cause: 404}))

  // Save db
  const message = await Message.create({content, receiverId})

  return res.status(201).json({success: true, message: "message created successfully"})

})

export const userMessages = catchError(async (req, res, next) => {
  // data
  const id = req.user._id
  
  // find messages
  const messages = await Message.find({ receiverId: id })
  return res.json({success: true, results: messages})
})