import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

const userInfo = [
    {id:1, name:'Rahul', email:'rahul@test.com'},
    {id:2, name:'John', email:'john@test.com'},
    {id:3, name:'Jay', email:'jay@test.com'},
]

app.get('/api/user', (req, res)=>{
res.send(userInfo);
})

app.listen(PORT, ()=> {console.log(`Server is running on port ${PORT}`)});