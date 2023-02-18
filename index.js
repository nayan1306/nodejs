const express = require('express');
const app = express();

const reqFilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send("Please provide your age")
    }
    else if(req.query.age<18){
        resp.send("You are under age")
    }
    else{
        next();
    }
}

app.use(reqFilter);

app.get('/',(_,resp)=>{
    resp.send('Welcome to home page.')
})

app.get('/help',(_,resp)=>{
    resp.send('Welcome to HELP page.')
})


app.get('*',(_,resp)=>{
    resp.send('404')
})

app.listen(4500);