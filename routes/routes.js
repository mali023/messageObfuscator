const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mydb.db3');


//Create DB if it does not exist
    db.serialize(function () {
        db.run("CREATE TABLE IF NOT EXISTS Messages(Name TEXT,Number TEXT,Email TEXT,Message TEXT,Date TEXT)");
    });

//GET Endpoint for testing API functionality
    router.get('/', (req, res) => {
        res.send('It works!');
    });

//GET Endpoint for retrieving all info from Messages DB Table
    router.get('/messages', (req, res) => {
        db.serialize(function () {
                db.all("SELECT * from Messages", function (err, rows) {
                        if (err) {
                            res.send('An error has occurred: ' + err);
                        } else {
                            res.send(rows);
                        }
                    });
            });
    });

//POST Endpoint for adding info to Messages DB Table
    router.post('/add', (req, res) => {
        db.serialize(function () {
            //adding date to submitted data from backend
                let date = new Date();
                let formattedDate = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear();
                console.log(formattedDate);
            //Obfuscation of message
                let reversedMessage = req.body.message.split("").reduce(function (revString, char) {return char + revString;}, "");
                let obfuscatedMessage = reversedMessage.replace(/[e'E]/g, '')
            //INSERT obfuscated message with date added to DB
                db.run(`INSERT into Messages(Name, Number, Email, Message, Date) VALUES ('${req.body.name}','${req.body.number}','${req.body.email}','${obfuscatedMessage}','${formattedDate}')`, (err, rows) => {
                    if (err) {
                        res.send('An error occurred: ' + err)
                    } else {
                        res.send('New Message Added')
                    }
                })
            })
    })

module.exports = router;