import authRouter from './modules/Auth/auth.router.js'
import messageRouter from './modules/messages/message.router.js'

export const startApp = (app, express) => {
  // middleware for static files
 // app.use("/uploads", express.static("uploads"))
  // 1- uploads 1 >> name of picture folder
  // 2- uploads 2 >> built in in node

  //  ROUTES
  app.use(express.json())

  // User
  app.use("/auth", authRouter)

  // Messages 
  app.use("/message", messageRouter)
   

  // Not Found Pages
  app.all("*", (req, res, next) => {
    next(new Error("page not found", { cause: 404 }))
  })

  // Route Handler 
  app.use((error, req, res, next) => {
    const statusCode = error.cause || 500

    return (process.env.ENV = "dev") 
      ? res.status(statusCode).json({
        success: false,
        message: error.message,
        stack: error.stack
      }) 
    : res.status(statusCode).json({
      success: false,
      message: error.message
    })
  })
}
