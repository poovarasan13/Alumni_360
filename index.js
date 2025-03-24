
const express=require('express');
const connectDB = require('./lib/db');
const StudentRouter=require('./router/student.router.js');
const webinarRoutes=require('./router/webinarRoutes.js');
const postRoutes=require('./router/postRoutes.js');
const internshipRoutes=require('./router/internshipRoutes.js');
const app=express();
const port=9000;
const cors=require('cors');
connectDB();
app.use(express.json());
app.use(cors());
app.use('/',StudentRouter);
app.use("/webinars", webinarRoutes);
app.use("/posts",postRoutes);
app.use("/internships", internshipRoutes);
app.listen(port,()=>{
    console.log("Server is running on port = ",port);
})