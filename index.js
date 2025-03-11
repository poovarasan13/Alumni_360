
const express=require('express');
const connectDB = require('./lib/db');
const StudentRouter=require('./router/student.router.js');
const app=express();
const port=9000;
const cors=require('cors');
connectDB();
app.use(express.json());
app.use(cors());
app.use('/login',StudentRouter);
app.listen(port,()=>{
    console.log("Server is running on port = ",port);
})