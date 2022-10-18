const express=require('express');
const app=express();
app.get('/p',(req,res)=>res.send(`API running on port ${PORT}`));
const PORT=process.env.PORT || 5000;
const temp=process.env.PORT;
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))