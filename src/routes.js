const router=require('express').Router();
import {Student} from './Models/StudentModel'



router.get('/student',async (req,res)=>{
    res.contentType('JSON');
    try{
        const students=await Student.find({});
        res.status(200).json(students);
    }
    catch(err){
        res.status(500).send(err);
    }
});

router.put('/student/:id',async(req,res)=>{
    const studentObj={
        roll:req.body.roll,
        name: req.body.name,
        age: parseInt(req.body.age, 10),  
        branch: req.body.branch,
        year: parseInt(req.body.year, 10), 
        email: req.body.email,
        phone: parseInt(req.body.phone, 10)
    }
    await Student.updateOne({roll:req.params.id},studentObj)
    res.send(`New student ${req.body.name} Added Successfully!`);
});

router.post('/student',async(req,res)=>{
    const studentObj=new Student({
        name: req.body.name,
        roll: req.body.roll, 
        age: parseInt(req.body.age, 10),  
        branch: req.body.branch,
        year: parseInt(req.body.year, 10), 
        email: req.body.email,
        phone: parseInt(req.body.phone, 10)
    });
    await studentObj.save();
    res.send(`New student ${req.body.name} Added Successfully!`);
});



router.delete('/delete/:id',async (req,res)=>{
    const id=req.params.id;
    await Student.deleteOne({roll:id});
    try{
        res.send(`Student with id:${id} Deleted Successfully!`);
    }
    catch(err){
        res.status(500).send(err);
    }
});


router.all('*',(req,res)=>{
    res.sendStatus(404);
})

export default router;
