

const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send('<a href="/contact">Contact Us</a> <br> <a href="/about">About Us</a>')
});

app.get('/contact',(req,res)=>{
    res.send('<h1>Contact us page</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>About us page</h1>')
})

app.get('*',(req,res)=>{
    res.send('<h1>404. this page is not found</h1>')
})

app.listen(3000,()=>{
    console.log('server started on port 3000');
});