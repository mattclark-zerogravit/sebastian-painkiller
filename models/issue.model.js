const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let IssueSchema = new Schema({
    title: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    solutions_tried: {type: String, required: false},
    solutions_proposed: {type: String, required: false},
    time_bound: {type: String, required: false},
});


// Export the model
module.exports = mongoose.model('Issue', IssueSchema);