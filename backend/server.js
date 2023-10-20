import express from "express";
import cors from 'cors'
import {router as authRouter} from'./router/authRouter.js';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {login} from './router/loginRoute.js'
import {forget} from './router/forget.js'
dotenv.config()


const app=express();
app.use(express.json());
app.use(cors());

const PORT=process.env.PORT

mongoose.connect("mongodb://127.0.0.1:27017/user",{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}).then(()=>{
    console.log("database connected");
}).catch((err)=>{console.log("error in connection db",err)});

//routes
app.use("/api",authRouter);
app.use("/api/register",login);
app.use("/api/reset",forget);

app.get("/",(req,res)=>{
    res.status(200).send('server working ');
})



app.listen(PORT,()=>{
    console.log("server running on",PORT);
})