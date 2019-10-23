const express = require("express");
const app = express();
const fs = require("fs");

// app.use((req, res, next) => { res.header("Access-Control-Allow-Origin", "*"); next(); }).listen(8080);

app.get("/api/login", (req, res) => {
    const usersList = JSON.parse(fs.readFileSync("src/app/Constants/users.txt"));
    for (user in users) {
        if (usersList[user].username === req.query.username) {
            if (usersList[user].password === req.query.password) {
                usersList[user].isLoggedIn = true;
                return fs.writeFile("src/app/Constants/users.txt", JSON.stringify(usersList), err => {
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

app.get("/api", (req, res) => {
    const usersList = JSON.parse(fs.readFileSync("src/app/Constants/users.txt").toString());
    for (let user in usersList) {
        if (usersList[user].isLoggedIn) {
            return res.end(JSON.stringify({ data: JSON.stringify(usersList[user]) }));
        } else {
            res.end(JSON.stringify({ data: "false" }));
        }
    }
}).listen(8080);

app.get("/api/updateCart",(req,res)=>{
    const usersList = JSON.parse(fs.readFileSync("src/app/Constants/users.txt").toString());
    const userData = JSON.parse(req.query.userData);
    for (let user in usersList) {
        if (usersList[user].username === userData.username) {
            console.log(user[user]);
            usersList[user].orderDetails.cartData = userData.orderDetails.cartData;
            return fs.writeFile("src/app/Constants/users.txt", JSON.stringify(usersList), err => {
                if (err) {
                    return res.end(JSON.stringify({ data: "An error has occured. Please try again!" }));
                }
                return res.end(JSON.stringify({ data: "Success"}));
            });
        }
    }
});