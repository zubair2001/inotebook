const mongoose = require('mongoose');
const {Schema} = mongoose;
const NotesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    tag:{
        type:String,
        default:'General'
    },
    date:{
        type:Date,
        default:date.now
    },
});

module.exports = mongoose.model('user',NotesSchema)