const express=require('express')
const router=express.Router();
//get api/users
//test route
router.get('/',(req,res)=>{res.send('user url')});
module.exports.user=router;