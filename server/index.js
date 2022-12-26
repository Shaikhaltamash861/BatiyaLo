

 //Attention
//Using app.listen(3000) will not work here, as it creates a new HTTP server.

const express=require('express');
const app=express();
const cors=require('cors')
const router=require('./router/router')
const mongoose=require('mongoose')
mongoose.set('strictQuery', true);
require('./container/connection')
// from here Socket programming starts
const {createServer}=require('http');
const httpServer=createServer(app);
const bodyParser=require('body-parser')
const PORT=process.env.PORT||5000;
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
  res.send('hello world fron sasta whatsapp')
})
app.use('/api',router);




httpServer.listen(PORT,console.log(`Server is running on ${PORT}`));