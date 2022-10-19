const express=require('express');
const connectDB=require('./config/db');
const app=express();
connectDB();
app.get('/',(req,res)=>res.send('API running on port'));
app.use('/api/users',require('./routes/api/users').user);
app.use('/api/post',require('./routes/api/post'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
const PORT=process.env.PORT || 5000;
const temp=process.env.PORT;
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))