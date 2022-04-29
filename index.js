const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello this is my smarty smarty node')
})

const users = [
    {id:1 , name:'kabbo' , email:"kabbo@gmail.com", phone:0173563345},
    {id:2 , name:'arif' , email:"arif@gmail.com", phone:0173563345},
    {id:3 , name:'rocky' , email:"rocky@gmail.com", phone:0173563345},
    {id:4 , name:'imtiaz' , email:"imtiaz@gmail.com", phone:0173563345},
    {id:5 , name:'tumpa' , email:"tumpa@gmail.com", phone:0173563345},
    {id:6 , name:'james' , email:"james@gmail.com", phone:0173563345},
    {id:7 , name:'oishi' , email:"oishi@gmail.com", phone:0173563345},
]

app.get('/users',(req,res)=>{
    res.send(users)
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params)
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.post('/user',(req,res)=>{
    console.log('request',req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);
})

app.listen(port,()=>{
    console.log('listening from port',port)
})