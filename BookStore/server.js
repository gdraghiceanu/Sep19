const express = require("express");
const app = express();
const fs = require("fs");
const GoogleSpreadsheet = require("google-spreadsheet");
const SpreadsheetDoc = new GoogleSpreadsheet("1zffhn9V3DFvmPWBnyfu2Cgwn1VJWWYuYzPvZghUyaqQ");

SpreadsheetDoc.useServiceAccountAuth(require("./AngularCourse-AuthKey.json"), err => {
    if (err) console.log(err);
   console.log("Connected")
});

function doSpreadsheetDocAction(alterCallback) {
    SpreadsheetDoc.useServiceAccountAuth(require("./AngularCourse-AuthKey.json"), err => {
        if (err) console.log(err);
        alterCallback;
    });
}

// app.use((req, res, next) => { res.header("Access-Control-Allow-Origin", "*"); next(); }).listen(8080);
// app.get("/api/login", (req, res) => {
//     const usersList = JSON.parse(fs.readFileSync("src/app/Constants/users.json"));
//     for (user in users) {
//         if (usersList[user].username === req.query.username) {
//             if (usersList[user].password === req.query.password) {
//                 usersList[user].isLoggedIn = true;
//                 return fs.writeFile("src/app/Constants/users.json", JSON.stringify(usersList), err => {
//                     if (err) {
//                         return res.end(JSON.stringify({ data: "An error has occured. Please try again!" }));
//                     }
//                     return res.end(JSON.stringify({ data: JSON.stringify(users[user]) }));
//                 });
//             }
//         }
//     }
//     res.end(JSON.stringify({ data: "false" }));
// });

app.get("/api", (req, res) => {
    doSpreadsheetDocAction(SpreadsheetDoc.getRows(1,{},(err,rows)=>{
        res.end(JSON.stringify(rows.filter(row=>row.isloggedin === 'TRUE')[0]));
    }));
}).listen(8080);

app.get("/api/get-items-collection",(req,res)=>{
    doSpreadsheetDocAction(SpreadsheetDoc.getRows(2,{},(err,bookRows)=>{
        const itemsCollection = {};
        itemsCollection.Books = bookRows;
        doSpreadsheetDocAction(SpreadsheetDoc.getRows(3,{},(err,notebookRows)=>{
            itemsCollection.Notebooks = notebookRows;
            res.end(JSON.stringify(itemsCollection)); 
        }))
    }));
});

app.get("/api/updateCart", (req, res) => {
    const usersList = JSON.parse(fs.readFileSync("src/app/Constants/users.txt").toString());
    const userData = JSON.parse(req.query.userData);
    for (let user in usersList) {
        if (usersList[user].username === userData.username) {
            usersList[user].orderDetails.cartData = userData.orderDetails.cartData;
            return fs.writeFile("src/app/Constants/users.txt", JSON.stringify(usersList), err => {
                if (err) {
                    return res.end(JSON.stringify({ data: "An error has occured. Please try again!" }));
                }
                return res.end(JSON.stringify({ data: "Success" }));
            });
        }
    }
});