// Schema  
import { Schema, Types , model} from "mongoose";

export const messageSchema = new Schema(
  {
    content: String,
    receiverId: {
    type: Types.ObjectId,
    ref: "User"
    }, 
  },
  {
    timestamps: true
  }
)

// Model

export const Message = model("Message", messageSchema)