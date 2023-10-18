import express from "express";
import cors from 'cors'




const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send('server working ');
})


app.listen(3000,()=>{
    console.log("server running on 3000")
})