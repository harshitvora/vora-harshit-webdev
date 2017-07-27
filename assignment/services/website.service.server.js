/**
 * Created by harsh on 7/26/2017.
 */

var app = require("../../express");

var websites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem"},
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem"},
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem"},
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem"},
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem"},
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem"}];

// http handlers:
app.post("/api/user/:userId/website", createWebsite);
app.get("/api/user/:userId/website", findAllWebsitesForUser);
app.get("/api/website/:websiteId", findWebsiteById);
app.put("/api/website/:websiteId", updateWebsite);
app.delete("/api/website/:websiteId", deleteWebsite);

function createWebsite(req, response) {
    var website = req.body;
    var userId = req.params.userId;
    website._id = (new Date()).getTime() + "";
    website.developerId = userId;
    websites.push(website);
    response.send(website);
}


function findAllWebsitesForUser(req, response) {
    var userId = req.params.userId;
    var sites = [];

    for(var w in websites){
        if(websites[w].developerId === userId){
            sites.push(websites[w]);
        }
    }
    response.json(sites);
}

function findWebsiteById(req, response) {
    var websiteId = req.params.websiteId;
    for(var w in websites){
        if(websites[w]._id === websiteId){
            response.send(websites[w]);
        }
    }
    response.send(null);
}

function updateWebsite(req, response) {
    website = req.body;
    websiteId = req.params.websiteId;
    website._id = websiteId;
    for(var w in websites){
        if(websites[w]._id === websiteId){
            websites[w] = website;
        }
    }
    response.send(website);
}

function deleteWebsite(req, response) {
    websiteId = req.params.websiteId;
    for(var w in websites){
        if(websites[w]._id === websiteId){
            delete websites[w];
        }
    }
    response.send("0");
}