const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.end(require("fs").readFileSync("src/app/Constants/booksLibrary.txt"));
}).listen(8080);