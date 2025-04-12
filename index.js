const express = require('express');
const connectDB = require('./lib/db');
const StudentRouter = require('./router/student.router.js');
const webinarRoutes = require('./router/webinarRoutes.js');
const postRoutes = require('./router/postRoutes.js');
const internshipRoutes = require('./router/internshipRoutes.js');
const forum = require('./router/forum.js');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 9000;

connectDB();
app.use(cors());
app.use(express.json());


// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/', StudentRouter);
app.use('/forums', forum);
app.use("/webinars", webinarRoutes);
app.use("/posts", postRoutes);
app.use("/internships", internshipRoutes);

app.listen(port, () => {
  console.log("Server is running on port =", port);
});
