/**
 * Created by harsh on 7/26/2017.
 */

var app = require("../../express");

var pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }];

// http handlers:
app.post("/api/website/:websitId/page", createPage);
app.get("/api/website/:websitId/page", findAllPagesForWebsite);
app.get("/api/page/:pageId", findPageById);
app.put("/api/page/:pageId", updatePage);
app.delete("/api/page/:pageId", deletePage);

function createPage(req, response) {
    var page = req.body;
    var websiteId = req.params.websiteId;
    page._id = (new Date()).getTime() + "";
    page.websiteId = websiteId;
    pages.push(page);
    response.send(page);
}


function findAllPagesForWebsite(req, response) {
    var websiteId = req.params.websiteId;
    var pages = [];

    for(var p in page){
        if(pages[p].websiteId === websiteId){
            pages.push(pages[p]);
        }
    }
    response.json(pages);
}

function findPageById(req, response) {
    var pageId = req.params.pageId;
    for(var w in websites){
        if(pages[p]._id === pageId){
            response.send(pages[p]);
        }
    }
    response.send(null);
}

function updatePage(req, response) {
    page = req.body;
    pageId = req.params.pageId;
    page._id = pageId;
    for(var p in pages){
        if(pages[p]._id === pageId){
            pages[p] = page;
        }
    }
    response.send(page);
}

function deletePage(req, response) {
    pageId = req.params.pageId;
    for(var p in pages){
        if(pages[p]._id === pageId){
            delete pages[p];
        }
    }
    response.send("0");
}