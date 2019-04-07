/* Project Name: COMP308 Assignment2
   Name: Kranthi kumar G J
   Student id: 300976059
   Date: 05-APR-2019 
   file name: contact.js*/

let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first"
});

module.exports = mongoose.model('contact', contactSchema);

//contactSchema