/**
 * Created by harsh on 8/2/2017.
 */

var mongoose = require('mongoose');
var pageSchema = require('./page.schema.server');
var db = require("../models.server");

var pageModel = mongoose.model("PageModel", pageSchema);
pageModel.createPageForWebsite = createPageForWebsite;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;
module.exports = pageModel;

function createPageForWebsite(websiteId, page) {
    page._website = websiteId;
    return pageModel.create(page);
}

function findAllPagesForWebsite(websiteId) {
    return pageModel.find({_website: websiteId});
}

function findPageById(pageId) {
    return pageModel.findById(pageId);
}

function updatePage(pageId, page) {
    return pageModel.update({_id: pageId}, {$set: page});
}

function deletePage(pageId) {
    return pageModel.deleteOne({_id: pageId});
}
