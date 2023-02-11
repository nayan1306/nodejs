// Dealing with html
const express = require('express');
const path = require('path');
const app = express();

const publicpath = path.join(__dirname,'public');

//app.use(express.static(publicpath));
app.get('',(_,resp)=>{
    resp.sendfile(`${publicpath}/index.html`)
})

app.get('/help',(_,resp)=>{
    resp.sendfile(`${publicpath}/help.html`)
})

app.get('/about',(_,resp)=>{
    resp.sendfile(`${publicpath}/about.html`)
})

app.listen(4500);