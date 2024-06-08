import express from 'express'
import router from '../src/routes'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const app=express();
mongoose.connect(process.env.DATABASE_URL);


app.use(cors);
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, ()=>
    console.log(`Server is running on port ${process.env.PORT}!`)
);