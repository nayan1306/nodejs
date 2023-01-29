const http = require('http');
// http module handels the request and response of a server in node js

/*
http.createServer((req,res)=>{
    res.write("My server");
    res.end();
}).listen(4500);
*/

function dataControl(req,res)
{
    res.write("<h1>Hello user</h1>");
    res.end();
}

http.createServer(dataControl).listen(4500);