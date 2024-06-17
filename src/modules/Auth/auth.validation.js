 ///  schemas >>> APIS  //
import joi from "joi"
export const signSchema = joi
  .object({
    //  body  

    email: joi.string().email().required(),
    name: joi.string().min(3).max(10).required(),
    password: joi.string().required(),
    confirmPassword: joi.string().valid(joi.ref("password")).required(),

    // //  query
    // x: joi.string().min(3).required(),
  })
  .required()


export const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string(),
})
.required()