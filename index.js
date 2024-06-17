import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/connection.js"
import { startApp } from "./src/app.router.js"
import { checkDataBase, sendEmails } from "./src/utils/cronjobs.js"
import schedule from 'node-schedule'
dotenv.config()
const app = express()
const port = process.env.PORT


connectDB()

checkDataBase()
sendEmails()
schedule.gracefulShutdown() // it stop what before it
startApp(app, express)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

