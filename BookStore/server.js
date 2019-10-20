const express = require("express");
const app = express();
const fs = require("fs");

app.use((req, res, next) => { res.header("Access-Control-Allow-Origin", "*"); next(); }).listen(8080);

app.get("/login", (req, res) => {
    let users = JSON.parse(fs.readFileSync("src/app/Constants/users.txt"));
    for (user in users) {
        if (users[user].username === req.query.username) {
            if (users[user].password === req.query.password) {
                users[user].isLoggedIn = true;
                return fs.writeFile("src/app/Constants/users.txt", JSON.stringify(users), err => {
                    if (err) {
                        return res.end(JSON.stringify({ data: "An error has occured. Please try again!" }));
                    }
                    return res.end(JSON.stringify({ data: JSON.stringify(users[user]) }));
                });

            }
        }
    }
    res.end(JSON.stringify({ data: "false" }));
});

app.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const usersList = JSON.parse(fs.readFileSync("src/app/Constants/users.txt").toString());
    for (user in usersList) {
        if (usersList[user].isLoggedIn) {
            return res.end(JSON.stringify({ data: JSON.stringify(usersList[user]) }));
        } else {
            res.end(JSON.stringify({ data: "false" }));
        }
    }
});

app.post("/updateCart",(req,res)=>{
    res.end("updated")
})