// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var studentSchema = new Schema({
    name: String,
    birthday: String,
    words:[String],
    notes:String,
    therapist: String
});

var Student = mongoose.model('Student', studentSchema);

module.exports = Student;