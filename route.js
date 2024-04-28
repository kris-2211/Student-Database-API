const router=require('express').Router();
const Ops=require('./StudentOps.js');

router.get('/',(req,res)=>{
    res.contentType('text/html');
    res.send("Student Database System");
});

router.get('/add',(req,res)=>{
    res.contentType('text/html');
    res.send("Add Student: give name,roll no.,age,branch,year,email,phone");
});

router.post('/add',(req,res)=>{
    const student={
        name:req.body.name,
        roll:req.body.roll,
        age:req.body.age,
        branch:req.body.branch,
        year:req.body.year,
        email:req.body.email,
        phone:req.body.phone
    };
    Ops.insertStudent(student);
    res.send("Student Added Successfully!");
});

router.get('/delete',(req,res)=>{
    res.contentType('text/html');
    res.send("Delete Student: give name,roll no.");
});

router.post('/delete',(req,res)=>{
    const student={
        name:req.body.name,
        roll:req.body.roll,
    };
    Ops.deleteStudent(student);
    res.send("Student Deleted Successfully!");
});

router.get('/fetch',(req,res)=>{
    res.contentType('JSON');
    const students=Ops.fetchStudents();
    res.send(students);
});

module.exports=router;
