import { Router } from "express";
import { isAuthenticated } from "../../../src/middleware/auth.middleware.js"
import { sendMessage , userMessages} from "./message.controller.js";


const router = Router()


// send message
router.post("/", isAuthenticated, sendMessage)

// user messages
router.get("/", isAuthenticated ,userMessages)

export default router