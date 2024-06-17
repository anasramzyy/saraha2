import multer, { diskStorage } from "multer";
import { nanoid } from "nanoid";


export const uploadCloud = () => {
  const storage = diskStorage({ // by default save file in folder 'temp'
  })

  const multerUpload = multer({ storage})

  return multerUpload
}
 