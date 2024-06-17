import multer, { diskStorage } from "multer";
import { nanoid } from "nanoid";


export const fileValidation = {
  image: ["image/jpeg", "image/png"],
  file: ["Microsoft Word Document", "application/msword"]
}


export const upload = ( { folder , filetype} ) => {
    //            (   2   )   
  ////     diskstorage   ////
  // diskstorage  >> function  >> const x  =  diskstorage({destination:  , filenmae:  })

  //  diskstorage({destination:  string or  function  ,  filename:  function })

  const storage = diskStorage({
    destination: `uploads/${folder}`,  // create folder
    filename: (req, file, cb) => { // save file 
      console.log(file)

      cb(null, nanoid() +  "__"  + file.originalname)     // cb = callback >> (error, filename)
    },
  })

  const fileFilter = (req, file, cb) => {
    // cb >> cb(error | null, true | false) // save >> true , not save >> false
    // file type
    if (!filetype.includes(file.mimetype)) {
      return cb(new Error("invalid format"), false)
      // cb>> has 'next' in it // next(new ERROR("invalid format")) global error handler
    }
    return cb(null, true)
  }

  //            (   1   ) 
  ////   multer     ////   
  /// multer >> function  >> multer({storage:   x result of diskstorage })
  const multerUpload = multer({ storage, fileFilter })

  return multerUpload
}
 