const express=require('express');
const login=require( '../controller/student.controller');
const router=express.Router();

router.post('/',login);

module.exports=router;


