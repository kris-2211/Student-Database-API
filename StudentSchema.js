// Purpose: Schema for Student Database System
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    roll:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        min:18,
        max:22,
    },
    branch:{
        type:String,
        required:true,
        enum:['CSE','ECE','ME','CE','EE'],
    },
    Year:{
        type:Number,
        required:true,
        enum:[1,2,3,4],
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    }     
});