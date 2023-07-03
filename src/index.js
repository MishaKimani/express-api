import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import router from "./routes/index.js"

const app = express();

app.use(cors({
    origin: "*"
}))

app.use(express.json())

const mongoUrl= 'mongodb+srv://mishanyawira:K1YMcYTJ5qQeiG0u@cluster0.o7i0gq9.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoUrl)
.then(()=>{console.log('MongoDB connected')})
.catch((err)=>{console.log(err)})

const server= http.createServer(app)

server.listen(8000, ()=>{
    console.log('Server is running on http://localhost:8000')
})

app.use('/', router)