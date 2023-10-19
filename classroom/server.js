const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

//Index - users
app.get("/users", (req, res) => {
    res.send("GET for users");
});

//show - users
app.get("/users/:id", (req, res) => {
    res.send("GET for users id");
});

//POST - users
app.post("/users", (req, res) => {
    res.send("POST for  users");
});

//DELETE - users
app.delete("/users/:id", (req, res) => {
    res.send("DELETE for users id");
});


//Posts

//Index
app.get("/posts", (req, res) => {
    res.send("GET for posts");
});

//show 
app.get("/posts/:id", (req, res) => {
    res.send("GET for post id");
});

//POST 
app.post("/posts", (req, res) => {
    res.send("POST for  posts");
});

//DELETE
app.delete("/posts/:id", (req, res) => {
    res.send("DELETE for post id");
});
app.listen(3000, () => {
    console.log("server is listening to 3000");
});

