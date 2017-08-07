/**
 * Created by harsh on 8/2/2017.
 */

var mongoose = require('mongoose');

var pageSchema = mongoose.Schema({
    _website: {type: mongoose.Schema.Types.ObjectId,  ref: 'WebsiteModel'},
    name: String,
    description: String,
    widgets: [{type: mongoose.Schema.Types.ObjectId, ref:'WidgetModel'}],
    dateCreated: {type: Date, default: Date.now}
}, {collection: "page"});

module.exports = pageSchema;
