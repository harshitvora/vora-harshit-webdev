/**
 * Created by harsh on 7/26/2017.
 */

var app = require("../../express");

var widgets = [
    { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        "url": "http://lorempixel.com/400/200/"},
    { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        "url": "https://youtu.be/AM2Ivdi9c4E" },
    { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}];

// http handlers:
app.post("/api/page/:pageId/widget", createWidget);
app.get("/api/page/:pageId/widget", findAllWidgetsForUser);
app.get("/api/widget/:widgetId", findWidgetById);
app.put("/api/widget/:widgetId", updateWidget);
app.delete("/api/widget/:widgetId", deleteWidget);

function createWidget(req, response) {
    var widget = req.body;
    var pageId = req.params.pageId;
    widget._id = (new Date()).getTime() + "";
    widget.pageId = pageId;
    widgets.push(widget);
    response.send(widget);
}


function findAllWidgetsForUser(req, response) {
    var pageId = req.params.pageId;
    var _widgets = [];
    for(var w in widgets){
        if(widgets[w].pageId === pageId){
            _widgets.push(widgets[w]);
        }
    }
    response.json(_widgets);
}

function findWidgetById(req, response) {
    var widgetId = req.params.widgetId;
    for(var w in widgets){
        if(widgets[w]._id === widgetId){
            response.send(widgets[w]);
        }
    }
    response.send(null);
}

function updateWidget(req, response) {
    widget = req.body;
    widgetId = req.params.widgetId;
    widget._id = widgetId;
    for(var w in widgets){
        if(widgets[w]._id === widgetId){
            widgets[w] = widget;
        }
    }
    response.send(widget);
}

function deleteWidget(req, response) {
    widgetId = req.params.widgetId;
    for(var w in widgets){
        if(widgets[w]._id === widgetId){
            delete widgets[w];
        }
    }
    response.send("0");
}