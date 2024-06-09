import mongoose from "mongoose";
import { branch_enum,year_enum} from "../Constants.js";
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
        enum:branch_enum,
        required:true
    },
    year:{
        type:Number,
        enum:year_enum,
        required:true
    },
    email:String,
    phone:{
        type:Number,
        required:true
    }
});

export const Student=mongoose.model('Student',StudentSchema);