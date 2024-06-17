// Schema  
import { Schema , model} from "mongoose";

export const userSchema = new Schema(
  {
    name: {
      type: String,
      min: 3,
      max: 10,
    },
    email: {
    type: String,
    unique: true,
    },
    password: {
    type: String,
    },
    isConfirmed: {
      type: Boolean,
      default: false,
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
    profilePic: {secure_url: String, public_id: String},
    coverPic: [{secure_url: String, public_id: String}],
  }, 
  {
    timestamps: true
  }
)

// Model

export const User = model("User", userSchema)
export default User