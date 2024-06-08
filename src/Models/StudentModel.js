import mongoose from "mongoose";
import { BRANCH_ENUM,YEAR_ENUM } from "../Constants";
const StudentSchema = new mongoose.Schema({
    roll:{
        type:String,
        required:true
    },
    name:{
        type:String,
        minLength:3,
        MaxLength:20,
        required:true
    },
    age:Number,
    branch:{
        type:String,
        enum:BRANCH_ENUM,
        required:true
    },
    year:{
        type:Number,
        enum:YEAR_ENUM,
        required:true
    },
    email:String,
    phone:{
        type:Number,
        required:true
    }
});

export const Student=mongoose.model('Student',StudentSchema);