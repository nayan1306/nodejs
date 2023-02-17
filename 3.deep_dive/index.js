// Dealing with html
const express = require('express');
const path = require('path');
const app = express();

const publicpath = path.join(__dirname,'public');

//app.use(express.static(publicpath));

app.set('view engine','ejs');

app.get('',(_,resp)=>{
    resp.sendfile(`${publicpath}/index.html`)
})

app.get('/help',(_,resp)=>{
    resp.sendfile(`${publicpath}/help.html`)
})

app.get('/about',(_,resp)=>{
    resp.sendfile(`${publicpath}/about.html`)
})

app.get('/profile',(_,resp)=>{
    const user = {
        name: 'Nayan Verma',
        email: 'vnayan94@gmail.com',
        city: 'Raipur',
        age: '19',
        skills: ['Flutter','Dart','Html','CSS','JS']   
    }
    resp.render('profile',{user})
})

app.get('*',(_,resp)=>{
    resp.sendfile(`${publicpath}/errorpage.html`)
})

app.listen(4500);