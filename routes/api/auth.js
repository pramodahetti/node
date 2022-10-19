const express=require('express')
const router=express.Router();
//get api/users
//test route
router.get('/',(req,res)=>{res.send('auth url')});
module.exports=router;