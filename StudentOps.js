const mongoose=require('mongoose');
const StudentSchema=require('./StudentSchema.js');



const Student=mongoose.model('Student',StudentSchema);

const insertStudent=(student)=>{
    mongoose.connect('mongodb://localhost:27017/StudentDB');
    const newStudent=new Student(student);
    newStudent.save();
    mongoose.connection.close();

}
const deleteStudent=(student)=>{
    mongoose.connect('mongodb://localhost:27017/StudentDB');
    Student.deleteOne(student,(err)=>{
        if(err){
            console.log(err);
        }
    });
    mongoose.connection.close();

}

const fetchStudents=()=>{
    mongoose.connect('mongodb://localhost:27017/StudentDB');
    const students=Student.find({});
    mongoose.connection.close();
    return students;
};

module.exports={fetchStudents,insertStudent,deleteStudent};