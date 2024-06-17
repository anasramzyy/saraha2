import { Router } from "express";
import { signup , login, confirmEmail, profilePic, coverPic, updateProfilePic, profile} from "./auth.controller.js";
import { isValid } from "../../middleware/validation.middleware.js";
import { loginSchema, signSchema } from "./auth.validation.js";
import { isAuthenticated } from "./../../middleware/auth.middleware.js"
import { uploadCloud } from "../../utils/multercloud.js";



const router = Router()


// SignUp
router.post('/signup', isValid(signSchema) ,signup)

// LogIn
router.post('/login', isValid(loginSchema) ,login)


// profile //
router.get('/profile', isAuthenticated, profile)

// // upload profile pic
// router.post("/profilepic", isAuthenticated, upload({folder: 'users/profilepics', filetype: fileValidation.image}).single("pp"), profilePic)


/////   upload by cloud  /// 
router.post("/profilepic", isAuthenticated, uploadCloud().single("pp"), profilePic)



/////   update profile pic /// 
router.patch("/profilepic", isAuthenticated, uploadCloud().single("pp"), updateProfilePic)


// // upload cover pic
// router.post("/coverpic", isAuthenticated, upload({folder: 'users/coverpics'}).array("covers", 2), coverPic)


/////   upload by cloud  /// 

// upload cover pic
router.post("/coverpic", isAuthenticated, uploadCloud({folder: 'users/coverpics'}).array("covers", 2), coverPic)


// confirm email
router.get("/:token", confirmEmail)


export default router