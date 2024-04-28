# Student Database API

An API made from express, mongoDB that is used to store student information. 

## Pre steps
Initialize node package manager using command:   
```
npm init
```

## Dependencies

Install the following dependecies using following command:   
```
npm i express nodemon mongoose
```
- Nodemon
- Express
- Mongoose

## End points  
### GET at /add   
- Gives instruction about how to add students to database.   

### POST at /add
- Give info as json text in body tab of postman.   
```
{
    "name":"XXXXX",
    "roll":"21B81A05A1",
    "age":"22",
    "branch":"CSE",
    "year":"3",
    "email":"bb@gmail.com",
    "phone":"224493674"
}
```
- The acknowledgment is given as response.     
Ex:   
![image](https://github.com/kris-2211/Student-Database-API/assets/144922208/51b726e5-9820-4ee0-8845-bde1819ccd76)

### GET at /delete  
- Gives instruction about how to delete students to database.  

### DELETE at /delete  
- Give the roll no. as a key for deleting the student from as json text in body tab of postman.  
```
{
    "roll":"21B81A05A1"
}
```
- The acknowledgment is given as respose.     
Ex:   
![image](https://github.com/kris-2211/Student-Database-API/assets/144922208/4e1a76fc-cf3d-4d08-adf7-39d7e26767dc)


### GET at /fetch   
-The response is a jason object containing all the students in the database.   
Ex:   
![image](https://github.com/kris-2211/Student-Database-API/assets/144922208/bc77a0f8-78b2-4aa1-b101-2c2258b9e209)

