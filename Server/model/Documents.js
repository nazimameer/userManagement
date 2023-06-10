const { Schema, model } = require('mongoose')

const Document = new Schema({
    fullname: String,
    email: String,
    gender: String,
    status: {
        type:String,
        default:"InActive"
    },
})

module.exports = model("Document", Document);