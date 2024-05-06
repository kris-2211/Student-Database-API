const router=require('express').Router();
const e = require('express');
const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost:27017/StudentDB');

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:3,
        MaxLength:20,
        required:true
    },
    roll:{
        type:String,
        required:true
    },
    age:Number,
    branch:{
        type:String,
        enum:['CSE','ECE','MECH','CIVIL','IT'],
        required:true
    },
    year:{
        type:Number,
        enum:[1,2,3,4],
        required:true
    },
    email:String,
    phone:{
        type:Number,
        required:true
    }
});

const Student=mongoose.model('Student',StudentSchema);

router.get('/',(req,res)=>{
    res.contentType('text/html');
    res.send("Student Database System");
});

router.get('/add',(req,res)=>{
    res.contentType('text');
    res.send("Add Student: give name,roll no.,age,branch,year,email,phone");
});

router.post('/add',async(req,res)=>{
    const studentObj=new Student({
        name: req.body.name,
        roll: req.body.roll, // Convert roll from string to integer
        age: parseInt(req.body.age, 10),   // Convert age from string to integer
        branch: req.body.branch,
        year: parseInt(req.body.year, 10), // Convert year from string to integer
        email: req.body.email,
        phone: parseInt(req.body.phone, 10)
    });
    await studentObj.save();
    res.send(`New student ${req.body.name} Added Successfully!`);
});

router.get('/delete',(req,res)=>{
    res.contentType('text');
    res.send("Delete Student: give name,roll no.");
});

router.delete('/delete',async (req,res)=>{
    const id=req.body.roll;
    await Student.deleteOne({roll:id});
    try{
        res.send(`Student with id:${id} Deleted Successfully!`);
    }
    catch(err){
        res.status(500).send(err);
    }
});

router.get('/fetch',async (req,res)=>{
    res.contentType('JSON');
    const students=await Student.find({});
    try{
        res.status(200).json(students);
    }
    catch(err){
        res.status(500).send(err);
    }
});

module.exports=router;
