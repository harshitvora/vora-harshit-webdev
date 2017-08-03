/**
 * Created by harsh on 8/2/2017.
 */

var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var db = require("../models.server");

var userModel = mongoose.model("UserModel", userSchema);
userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.getAllUsers = getAllUsers;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
module.exports = userModel;

function createUser(user) {
    return userModel.create(user);
}

function findUserById(id) {
    return userModel.findById(id);
}

function findUserByUsername(username) {
    return userModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
    return userModel.findOne({username: username, password: password});
}

function getAllUsers() {
    return userModel.find();
}

function updateUser(userId, newUser) {
    return userModel.update({_id: userId}, {$set: newUser});
}

function deleteUser(userId, newUser) {
    return userModel.deleteOne({_id: userId});
}