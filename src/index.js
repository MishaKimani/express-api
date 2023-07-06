import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import dotenv from "dotenv";

import router from "./routes/index.js"

dotenv.config()

const app = express();

app.use(cors({
    origin: "*"
}))

app.use(express.json())

const mongoUrl= process.env.MONGO_URL

mongoose.connect(mongoUrl)

.then(
    ()=>{console.log('MongoDB connected')}
    )
.catch(
    (err)=>{console.log(err)}
    )

const server= http.createServer(app)

server.listen(8000, ()=>{
    console.log('Server is running on http://localhost:8000')
})

app.use('/', router)