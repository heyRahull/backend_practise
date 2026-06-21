require('dotenv').config();
const express = require('express');

const app = express();
// const PORT = 3045;

app.get('/',(req,res)=>{
    res.send('This is Home Page');
})

app.get('/about',(req,res)=>{
    res.send('This is About Page');
})

app.get('/contact',(req,res)=>{
    res.send('<h1>This is Contact Page</h1>');
})

app.listen(process.env.PORT,()=>{console.log(`server is running on port : ${process.env.PORT}`)})