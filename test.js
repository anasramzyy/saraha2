import { json } from "express";
import Joi from "joi";

const data = {

  name: "Anas",
  age: 22,
  email: "anas@yahoo.com",
  password: "1234567",
  cPassword: "1234567",
  skills: ["css", "java"]
}

const schema = Joi
  .object({
    name: Joi.string().min(2).max(38).required(),
    age: Joi.number().integer().min(18).max(80).required(),
    email: Joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] }})
      .required(),
    password: Joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    cPassword: Joi.string().valid(Joi.ref("password")).required(),
    skills: Joi.array().items(Joi.string())
  })
  .required()
// .unknown(true)   // allow add to schema without validation

const result = schema.validate(data, {abortEarly: false}) // abort by default is true //
console.log(result)