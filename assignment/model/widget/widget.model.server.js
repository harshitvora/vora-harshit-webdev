/**
 * Created by harsh on 8/2/2017.
 */

var mongoose = require('mongoose');
var widgetSchema = require('./widget.schema.server');
var db = require("../models.server");

var widgetModel = mongoose.model("WidgetModel", widgetSchema);
widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;
module.exports = widgetModel;

var pageModel = require("../page/page.model.server");

function createWidget(pageId, widget) {
    var widgetTmp = null;
    widget._page = pageId;
    return widgetModel.create(widget)
        .then(function (widgetDoc) {
            widgetTmp = widgetDoc;
            return pageModel.addWidget(pageId, widgetDoc._id)
        })
        .then(function (pageDoc) {
            return widgetTmp;
        })
}


function findAllWidgetsForPage(pageId) {
    return widgetModel.find({_page: pageId});
}

function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget)  {
    return widgetModel.update({_id: widgetId}, {$set: widget});
}

function deleteWidget(widgetId) {
    return widgetModel.deleteOne({_id: widgetId});
}

function reorderWidget(pageId, start, end) {

}
