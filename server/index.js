const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors())
app.use(express.json());

// connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "uploadcv",
})
con.connect(function (err) {
    if (err) {
        console.log("Internal Server Error Occurred")
    }
    else {
        console.log("Connected to database uploadcv")
    }
})


// route
app.post("/contact", (req, res) => {
    const { name, email, contact, msg } = req.body;

    if (name && email && contact && msg) {

        const sql = "insert into tetratechcontactpage(name, email, contact, msg) values ?";
        const values = [[name, email, contact, msg]];

        con.query(sql, [values], function (err) {
            if (err) {
                return res.json({ msg: "Internal Server Error Occurred", success: false })
            }
            else {
                return res.json({ success: true })
            }
        })
    }
    else {
        return res.json({ msg: "Please enter valid details", success: false })
    }
})



app.listen("7007", () => {
    console.log("Server running at port 7007");
})