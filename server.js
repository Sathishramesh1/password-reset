import express from "express";
import cors from 'cors'
import {router as authRouter} from'./router/authRouter.js';
import mongoose from 'mongoose'

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/user",{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}).then(()=>{
    console.log("database connected");
}).catch((err)=>{console.log("error in connection db",err)});

app.use("/create",authRouter);

app.get("/",(req,res)=>{
    res.status(200).send('server working ');
})




app.listen(3000,()=>{
    console.log("server running on 3000")
})