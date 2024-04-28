const express=require('express');
const app=express();
const router =require('./route.js');

app.use(router);

app.listen(3000, ()=>
    console.log(`Server is running on port 3000!`)
);
