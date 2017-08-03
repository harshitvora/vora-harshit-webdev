/**
 * Created by harsh on 7/26/2017.
 */

var app = require("../../express");
var userModel = require("../model/user/user.model.server");

// http handlers:
app.get("/api/users", getAllUsers);
app.get("/api/user/:userId", findUserById);
app.get("/api/user", findUserByCredentials);
app.post("/api/user", createUser);
app.delete("/api/user/:userId", deleteUser);
app.put("/api/user/:userId", updateUser);

function getAllUsers(req, response) {
    userModel.getAllUsers()
        .then(function (users) {
            response.json(users);
        })
}

function createUser(req, response) {
    var user = req.body;
    userModel.createUser(user)
        .then(function (user) {
            console.log(user);
            response.json(user);
        })
}

function findUserById(req, response) {
    userModel.findUserById(req.params.userId)
        .then(function (user) {
            response.json(user);
        })
}

function findUserByCredentials(req, response) {

    var username = req.query.username;
    var password = req.query.password;

    if(username && password){
        userModel.findUserByCredentials(username, password)
            .then(function (user) {
                response.json(user);
            }, function (err) {
                response.sendStatus(404).send(err);
            });
    }
    else if(username){
        userModel.findUserByUsername(username)
            .then(function (user) {
                response.json(user);
            }, function (err) {
                response.sendStatus(404).send(err);
            });
    }
}

function updateUser(req, response) {
    var user = req.body;
    var userId = req.params.userId;
    userModel.updateUser(userId, user)
        .then(function (status) {
            response.json(status);
        }, function (err) {
            response.sendStatus(404).send(err);
        })
}

function deleteUser(req, response) {
    var userId = req.params.userId;
    userModel.deleteUser(userId)
        .then(function (status) {
            response.json(status);
        }, function (err) {
            response.sendStatus(404).send(err);
        })
}