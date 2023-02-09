// Crud operations
const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname,"crud");
const filepath = `${dirpath}/content.txt`;

// fs.writeFileSync(filepath,"This is some content.");

// fs.readFile(filepath,'utf-8',(err,item)=>{
//     console.log(item);
// })


fs.appendFile(filepath,' this is a text added to the previous text.',(err)=>{
    if(!err) console.log("File is updated.")
})