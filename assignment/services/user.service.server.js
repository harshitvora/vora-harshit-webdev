/**
 * Created by harsh on 7/26/2017.
 */

var app = require("../../express");

var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
];

// http handlers:
app.get("/api/users", getAllUsers);
app.get("/api/user/:userId", findUserById);
app.get("/api/user", findUserByCredentials);
app.post("/api/user", createUser);
app.delete("/api/user/:userId", deleteUser);
app.put("/api/user/:userId", updateUser);

function getAllUsers(req, response) {
    response.send(users);
}

function createUser(req, response) {
    var user = req.body;
    user._id = (new Date()).getTime() + "";
    users.push(user);
    response.send(user);
}

function findUserById(req, response) {
    for (var u in users) {
        if (users[u]._id === req.params.userId) {
            response.send(users[u]);
        }
    }
}

function findUserByCredentials(req, response) {

    var username = req.query.username;
    var password = req.query.password;

    if(username && password){
        for(var u in users){
            var _user = users[u];
            if(_user.username === username && _user.password === password){
                response.send(_user);
                return;
            }
        }
        response.send("0");
    }
    else if(username){
        for(var u in users){
            var _user = users[u];
            if(_user.username === username){
                response.send(_user);
                return;
            }
        }
        response.send(null);
    }
}

function updateUser(req, response) {
    var user = req.body;
    var userId = req.params.userId;
    user._id = userId;
    for(var u in users){
        if(users[u]._id === userId){
            users[u] = user;
        }
    }
    response.send(user);
}

function deleteUser(req, response) {
    var userId = req.params.userId;
    for(var u in users){
        if(users[u]._id === userId){
            delete users[u];
        }
    }
    response.send("0");
}