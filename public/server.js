import express from 'express'
import router from '../src/routes.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
// import cors from 'cors'  //use inly with front end
dotenv.config()
const app=express();

mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("successfully connected with mongodb"));


// app.use(cors);  // use only with frontend
app.use(express.json());
app.use(router);


app.listen(process.env.PORT | 3000, ()=>{
    console.log(`Server is running on port ${3000}!`)
});