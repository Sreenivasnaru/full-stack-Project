const express = require("express");
const app = express();
const session = require("express-session");

const sessionOptions = {secret: "mysupersecretstring", resave: false, saveUninitialized: true,};
app.use(session(sessionOptions));

app.get("/register", (req, res) => {
    let { name = "anonymous"} = req.query;
    console.log(req.session);
    res.send(name); 
});

app.get("/hello", (req, res) => {
    res.send(`hello`);
})

// app.get("/reqcount", (req, res) => {
//     if(req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
    
//     res.send(`You sent a request ${req.session.count} times`);
// });

app.listen(3000, () => {
    console.log("server is listening to 3000");
});

