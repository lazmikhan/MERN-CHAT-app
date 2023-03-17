const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const chats = require('./data/data');
const app= express();
app.use(cors());
const PORT = process.env.PORT||5000;
app.listen(5000, console.log(`server started ${PORT}`));

app.get('/', (req,res)=>{
    res.send("api is running");
})
app.get('/api/chats', (req,res)=>{
res.send(chats);
})

app.get('/api/chats/:id', (req,res)=>{
    const id = req.params.id;
    const singleChat = chats.find((c)=>c._id===id);

    res.send(singleChat);
})