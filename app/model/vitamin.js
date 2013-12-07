var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var VitaminSchema = new Schema({
    title: {type: String, trim: true},
    content: {type: String, trim: true},
    vitaminName: {type: String, trim: true},
    createDate: {type: Date, default: Date.now}
})

mongoose.model('Vitamin', VitaminSchema)